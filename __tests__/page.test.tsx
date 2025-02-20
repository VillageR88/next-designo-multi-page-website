import '@testing-library/jest-dom';
import preloadAll from 'jest-next-dynamic';
import { render, screen } from '@testing-library/react';
import fs from 'node:fs';
import path from 'node:path';
import Layout from '../app/layout';

// Preload all dynamic imports
beforeAll(async () => {
  await preloadAll();
});

// Utility functions
function checkAnchorElements(): void {
  const anchors = document.querySelectorAll('a');
  if (anchors.length > 0) {
    for (const anchor of Array.from(anchors)) {
      const href = anchor.getAttribute('href');
      console.log(href);
      const textContent = anchor.textContent?.trim();
      const ariaLabel = anchor.getAttribute('aria-label');

      expect(anchor).toHaveAttribute('href');
      const hasText = textContent && textContent !== '';
      const hasAriaLabel = ariaLabel && ariaLabel !== '';
      // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
      expect(hasText || hasAriaLabel).toBe(true);
    }
  }
}

function checkImageElements(): void {
  const images = screen.queryAllByRole('img');
  if (images.length > 0) {
    for (const img of images) {
      expect(img).toHaveAttribute('alt');
    }
  }
}

// Dynamically import all page components
const appDirectory = path.join(__dirname, '../app');
const pageFiles = fs
  .readdirSync(appDirectory, { recursive: true, withFileTypes: true })
  .filter((file) => file.isFile() && file.name.includes('page.tsx'))
  .map((file) => path.resolve(appDirectory, file.parentPath, file.name)); // Ensure the correct path is used
console.log('pageFiles', pageFiles);

const PageComponentCollection: Record<string, React.FC> = {};

// Load all components before tests
beforeAll(async () => {
  const imports = pageFiles.map(async (file) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const importedModule = await import(file);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    PageComponentCollection[file] = importedModule.default;
  });

  await Promise.all(imports); // Ensure all imports complete before tests run
});

// Test each page component
// biome-ignore lint/complexity/noForEach: <explanation>
pageFiles.forEach((file) => {
  console.log('file', file);
  describe(`Testing page: ${file}`, () => {
    let PageComponent: React.FC;

    beforeAll(() => {
      PageComponent = PageComponentCollection[file];
    });

    it('renders a head element', () => {
      render(
        <Layout>
          <PageComponent />
        </Layout>,
      );
      expect(document.head).toBeInTheDocument();
    });

    it('renders a body element', () => {
      render(
        <Layout>
          <PageComponent />
        </Layout>,
      );
      expect(document.body).toBeInTheDocument();
    });

    it('renders a main element', () => {
      render(
        <Layout>
          <PageComponent />
        </Layout>,
      );
      expect(screen.getByRole('main')).toBeInTheDocument();
    });

    it('renders image elements with alt attributes if any', () => {
      render(
        <Layout>
          <PageComponent />
        </Layout>,
      );
      checkImageElements();
    });

    it('renders anchor elements with non-empty href attributes and discernible text or aria-label if any', () => {
      render(
        <Layout>
          <PageComponent />
        </Layout>,
      );
      checkAnchorElements();
    });

    it('renders the navigation and footer elements', () => {
      render(
        <Layout>
          <PageComponent />
        </Layout>,
      );

      expect(screen.getByRole('navigation')).toBeInTheDocument();
      expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });

    it('renders the logo in the header and footer', () => {
      render(
        <Layout>
          <PageComponent />
        </Layout>,
      );

      const logos = screen.getAllByAltText('logo');
      expect(logos.length).toBe(2);
    });
  });
});

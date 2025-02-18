import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import fs from 'node:fs';
import path from 'node:path';
import Layout from '../app/layout';

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
const pageFiles = fs.readdirSync(appDirectory).filter((file) => file.match('page.tsx'));

// Test each page component
for (const file of pageFiles) {
  describe(file, () => {
    let PageComponent: () => JSX.Element;

    beforeAll(async () => {
      const importedModule = (await import(path.join(appDirectory, file))) as { default: () => JSX.Element };
      PageComponent = importedModule.default;
    });
    it('renders a head element', () => {
      render(
        <Layout>
          <PageComponent />
        </Layout>,
      );

      const headElement = document.head;

      expect(headElement).toBeInTheDocument();
    });

    it('renders a body element', () => {
      render(
        <Layout>
          <PageComponent />
        </Layout>,
      );

      const bodyElement = document.body;

      expect(bodyElement).toBeInTheDocument();
    });

    it('renders a main element', () => {
      render(
        <Layout>
          <PageComponent />
        </Layout>,
      );

      const mainElement = screen.getByRole('main');

      expect(mainElement).toBeInTheDocument();
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

      const navElement = screen.getByRole('navigation');
      const footerElement = screen.getByRole('contentinfo');

      expect(navElement).toBeInTheDocument();
      expect(footerElement).toBeInTheDocument();
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
}

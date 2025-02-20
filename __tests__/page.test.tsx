import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Layout from '../app/layout';
import Home from '../app/page';
import About from '../app/about/page';
import Locations from '../app/locations/page';
import Contact from '../app/contact/page';
// import Design from '../app/design/[design]/page';

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

// biome-ignore lint/complexity/noForEach: <explanation>
[Home, About, Locations, Contact].forEach((PageComponent) => {
  console.log('file', PageComponent);
  describe(`Testing page: ${PageComponent.name}`, () => {
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
  });
});

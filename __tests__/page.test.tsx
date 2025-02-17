import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Layout from '../app/layout';
import Page from '../app/page';

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

describe('Page', () => {
  // The Page component is tested to ensure that it renders the head, body, and main elements correctly.
  // It also checks for the presence of images with alt attributes and anchor elements with valid href attributes and discernible text or aria-labels.
  it('renders a head element', () => {
    render(<Page />);

    const headElement = document.head;

    expect(headElement).toBeInTheDocument();
  });

  it('renders a body element', () => {
    render(<Page />);

    const bodyElement = document.body;

    expect(bodyElement).toBeInTheDocument();
  });

  it('renders a main element', () => {
    render(<Page />);

    const mainElement = screen.getByRole('main');

    expect(mainElement).toBeInTheDocument();
  });

  it('renders image elements with alt attributes if any', () => {
    render(<Page />);
    checkImageElements();
  });

  it('renders anchor elements with non-empty href attributes and discernible text or aria-label if any', () => {
    render(<Page />);
    checkAnchorElements();
  });
});

describe('Layout', () => {
  // The Layout component is tested to ensure that it renders the navigation and footer elements correctly.
  // It also checks for the presence of the logo and navigation links in both the header and footer.
  it('renders the navigation and footer elements', () => {
    render(
      <Layout>
        <div />
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
        <div />
      </Layout>,
    );

    const logos = screen.getAllByAltText('logo');
    expect(logos.length).toBe(2);
  });

  it('renders anchor elements with non-empty href attributes and discernible text or aria-label if any', () => {
    render(
      <Layout>
        <div />
      </Layout>,
    );
    checkAnchorElements();
  });
});

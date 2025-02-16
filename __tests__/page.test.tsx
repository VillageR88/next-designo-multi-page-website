import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from '../app/page';

describe('Page', () => {
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

    const images = screen.queryAllByRole('img');
    if (images.length > 0) {
      for (const img of images) {
        expect(img).toHaveAttribute('alt');
      }
    }
  });

  it('renders anchor elements with non-empty href attributes and discernible text or aria-label if any', () => {
    render(<Page />);

    const anchors = document.querySelectorAll('a');
    if (anchors.length > 0) {
      for (const anchor of Array.from(anchors)) {
        expect(anchor).toHaveAttribute('href');
        expect(anchor.getAttribute('href')).not.toBe('');
        const hasText = anchor.textContent && anchor.textContent.trim() !== '';
        const hasAriaLabel =
          anchor.hasAttribute('aria-label') && (anchor.getAttribute('aria-label')?.trim() ?? '') !== '';
        expect(hasText ?? hasAriaLabel).toBe(true);
      }
    }
  });
});

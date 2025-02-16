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
});

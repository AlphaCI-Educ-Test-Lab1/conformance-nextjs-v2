import { render, screen } from '@testing-library/react';
import { SERVICE_NAME } from '../index';
import RootLayout, { metadata } from './layout';
import Home from './page';

describe('app shell', () => {
  it('names the service in its metadata', () => {
    expect(metadata.title).toBe(SERVICE_NAME);
  });

  // CALLED, not rendered. RootLayout returns <html><body>, and mounting that
  // into jsdom's existing document makes React log "In HTML, <html> cannot be a
  // child of <div>" — a real complaint about the test, not about the layout.
  // Calling the function returns the same element tree and asserts the same
  // thing without pretending a document can nest inside itself.
  it('wraps its children in a body, on an English page', () => {
    const tree = RootLayout({ children: <p>hello</p> });

    expect(tree.props.lang).toBe('en');
    expect(tree.props.children.type).toBe('body');
  });

  it('shows the calculator panel on the home page', () => {
    render(<Home />);

    expect(screen.getByRole('heading', { name: SERVICE_NAME })).toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveTextContent('4');
  });
});

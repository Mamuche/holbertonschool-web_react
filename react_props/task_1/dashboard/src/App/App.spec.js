import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('h1 with text "School dashboard"', () => {
    const heading = screen.getByRole('heading', { level: 1, name: /school dashboard/i });
    expect(heading).toBeInTheDocument();
  });

  test('body and footer paragraphs', () => {
    const bodyText = screen.getByText(/login to access the full dashboard/i);
    expect(bodyText).toBeInTheDocument();

    const footerText = screen.getByText(/copyright.*holberton school/i);
    expect(footerText).toBeInTheDocument();
  });

  test('image with text "holberton logo"', () => {
    const logoImg = screen.getByAltText(/holberton logo/i);
    expect(logoImg).toBeInTheDocument();
  });

  test('contains 2 inputs', () => {
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test('contains 2 labels with text "Email" and "Holberton"', () => {
    const emailLabel = screen.getByText(/email/i);
    const passwordLabel = screen.getByText(/password/i);
    expect(emailLabel.tagName).toBe('LABEL');
    expect(passwordLabel.tagName).toBe('LABEL');
  });

  test('contains 1 button with text "OK"', () => {
    const button = screen.getByRole('button', { name: /ok/i });
    expect(button).toBeInTheDocument();
  });
});

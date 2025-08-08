/* eslint-disable no-undef */
import { render, screen, fireEvent } from '@testing-library/react';

import Header from './Header';

describe('Header Component', () => {
  let mockToggleTheme;

  beforeEach(() => {
    mockToggleTheme = jest.fn();
  });

  test('renders the header with the correct title', () => {
    render(<Header toggleTheme={mockToggleTheme} theme="light" />);
    expect(
      screen.getByRole('heading', { name: /factwise employees dashboard/i })
    ).toBeInTheDocument();
  });

  test('applies the correct class based on light theme', () => {
    render(<Header toggleTheme={mockToggleTheme} theme="light" />);
    const headerElement = screen.getByRole('banner'); // <header> tag
    expect(headerElement).toHaveClass('light');
    expect(headerElement).not.toHaveClass('dark');
  });

  test('applies the correct class based on dark theme', () => {
    render(<Header toggleTheme={mockToggleTheme} theme="dark" />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toHaveClass('dark');
    expect(headerElement).not.toHaveClass('light');
  });

  test('shows "Dark Mode" button text when theme is light', () => {
    render(<Header toggleTheme={mockToggleTheme} theme="light" />);
    const buttonElement = screen.getByRole('button', { name: /dark mode/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test('shows "Light Mode" button text when theme is dark', () => {
    render(<Header toggleTheme={mockToggleTheme} theme="dark" />);
    const buttonElement = screen.getByRole('button', { name: /light mode/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls toggleTheme when the button is clicked', () => {
    render(<Header toggleTheme={mockToggleTheme} theme="light" />);
    const buttonElement = screen.getByRole('button', { name: /dark mode/i });
    fireEvent.click(buttonElement);
    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
  });

  test('switches button text correctly when theme changes', () => {
    const { rerender } = render(
      <Header toggleTheme={mockToggleTheme} theme="light" />
    );
    expect(screen.getByRole('button', { name: /dark mode/i })).toBeInTheDocument();

    rerender(<Header toggleTheme={mockToggleTheme} theme="dark" />);
    expect(screen.getByRole('button', { name: /light mode/i })).toBeInTheDocument();
  });
});

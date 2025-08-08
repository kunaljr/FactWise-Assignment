/* eslint-disable no-undef */
import { render, screen, fireEvent } from '@testing-library/react';

import App from './App';

jest.mock('./components/Layout/Header', () => ({ toggleTheme, theme }) => (
    <div data-testid="header">
        <button onClick={toggleTheme}>Toggle Theme</button>
        <span>Current Theme: {theme}</span>
    </div>
));

jest.mock('./components/Datagrid/DataGrid', () => ({ theme }) => (
    <div data-testid="datagrid">Theme: {theme}</div>
));

describe('App Component', () => {
    beforeEach(() => {
        document.documentElement.setAttribute('data-theme', ''); 
    });

    test('renders Header and DataGrid', () => {
        render(<App />);

        expect(screen.getByTestId('header')).toBeInTheDocument();
        expect(screen.getByTestId('datagrid')).toBeInTheDocument();
    });

    test('default theme is light', () => {
        render(<App />);

        expect(screen.getByText(/Current Theme: light/i)).toBeInTheDocument();
        expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    });

    test('toggles theme from light to dark', () => {
        render(<App />);

        const toggleButton = screen.getByText(/Toggle Theme/i);
        fireEvent.click(toggleButton);

        expect(screen.getByText(/Current Theme: dark/i)).toBeInTheDocument();
        expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    });

    test('toggles theme back to light', () => {
        render(<App />);

        const toggleButton = screen.getByText(/Toggle Theme/i);
        fireEvent.click(toggleButton); 
        fireEvent.click(toggleButton); 

        expect(screen.getByText(/Current Theme: light/i)).toBeInTheDocument();
        expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    });
});

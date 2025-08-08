/* eslint-disable no-undef */
import { setAgTableDarkMode } from './utils';

describe('setAgTableDarkMode', () => {
    beforeEach(() => {
        document.body.dataset.agThemeMode = '';
    });

    it('should set theme mode to "dark" when enabled is true', () => {
        setAgTableDarkMode(true);
        expect(document.body.dataset.agThemeMode).toBe('dark');
    });

    it('should set theme mode to "light" when enabled is false', () => {
        setAgTableDarkMode(false);
        expect(document.body.dataset.agThemeMode).toBe('light');
    });

    it('should overwrite the existing value when called multiple times', () => {
        setAgTableDarkMode(true);
        expect(document.body.dataset.agThemeMode).toBe('dark');

        setAgTableDarkMode(false);
        expect(document.body.dataset.agThemeMode).toBe('light');
    });
});

import { themeAlpine } from "ag-grid-community";

export const agTableTheme = themeAlpine
    .withParams(
        {
            backgroundColor: 'white',
            foregroundColor: 'black',
            headerTextColor: 'white',
            headerBackgroundColor: '#2d2d2d',
            browserColorScheme: 'light',
        },
        'light'
    )
    .withParams(
        {
            backgroundColor: '#2d2d2d',
            foregroundColor: 'white',
            headerBackgroundColor: '#2d2d2d',
            browserColorScheme: 'dark',
        },
        'dark'
    );
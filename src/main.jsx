import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ModuleRegistry } from 'ag-grid-community';
import {
    ClientSideRowModelModule,
    ValidationModule,
    PaginationModule,
    TextFilterModule,
    NumberFilterModule,
    DateFilterModule,
    CustomFilterModule,
    RowAutoHeightModule,
    CsvExportModule,
} from 'ag-grid-community';

import App from './App.jsx';

ModuleRegistry.registerModules([
    ClientSideRowModelModule,
    ValidationModule,
    PaginationModule,
    TextFilterModule,
    NumberFilterModule,
    DateFilterModule,
    CustomFilterModule,
    RowAutoHeightModule,
    CsvExportModule,
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
);

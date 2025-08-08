/* eslint-disable no-undef */
import { render, screen, fireEvent } from '@testing-library/react';

import DataGrid from './DataGrid';
import { sampleData } from '../../data/sampleData';
import { columnDefs } from './column';
import { defaultColDef } from './defaultcoldef';
import { exportToCSV } from '../../utils/exportUtils';
import { setAgTableDarkMode } from './utils';

jest.mock('ag-grid-react', () => ({
  AgGridReact: jest.fn(() => <div data-testid="ag-grid-react">Mock AG Grid</div>)
}));

jest.mock('../../utils/exportUtils', () => ({
  exportToCSV: jest.fn()
}));

jest.mock('./utils', () => ({
  setAgTableDarkMode: jest.fn()
}));

describe('DataGrid Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders export button', () => {
    render(<DataGrid theme="light" />);
    expect(screen.getByText(/Export to CSV/i)).toBeInTheDocument();
  });

  test('calls exportToCSV when export button is clicked', () => {
    render(<DataGrid theme="light" />);
    const button = screen.getByText(/Export to CSV/i);

    fireEvent.click(button);

    expect(exportToCSV).toHaveBeenCalledTimes(1);
    expect(exportToCSV).toHaveBeenCalledWith(expect.any(Object), 'employee-data.csv');
  });

  test('sets dark mode when theme is dark', () => {
    render(<DataGrid theme="dark" />);
    expect(setAgTableDarkMode).toHaveBeenCalledWith(true);
  });

  test('sets light mode when theme is light', () => {
    render(<DataGrid theme="light" />);
    expect(setAgTableDarkMode).toHaveBeenCalledWith(false);
  });

  test('passes correct props to AgGridReact', () => {
    const { AgGridReact } = require('ag-grid-react');

    render(<DataGrid theme="light" />);

    const props = AgGridReact.mock.calls[0][0];

    expect(props.rowData).toEqual(sampleData);
    expect(props.columnDefs).toEqual(columnDefs);
    expect(props.defaultColDef).toEqual(defaultColDef);
    expect(props.pagination).toBe(true);
    expect(props.paginationPageSize).toBe(10);
    expect(props.paginationPageSizeSelector).toEqual([10, 20, 50, 100]);
  });
});

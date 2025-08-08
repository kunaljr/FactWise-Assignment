import { useState, useMemo, useRef, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';

import { sampleData } from '../../data/sampleData';
import { columnDefs as columns } from './column';
import { defaultColDef as defaultCol } from './defaultcoldef';
import { exportToCSV } from '../../utils/exportUtils';
import { agTableTheme } from './theme';
import { setAgTableDarkMode } from './utils';
import '../../assets/styles/dataGrid.css';



const DataGrid = ({ theme }) => {
    const gridRef = useRef();
    const [rowData] = useState(sampleData);
    const columnDefs = useMemo(() => columns, []);

    const defaultColDef = useMemo(() => defaultCol, []);

    const onExportClick = () => exportToCSV(gridRef, 'employee-data.csv');

    useEffect(() => {
        setAgTableDarkMode(theme === 'light' ? false : true);
    }, [theme]);

    return (
        <div className="dashboard">
            <div className="export">
                <button className="export-button" onClick={onExportClick}>
                    Export to CSV
                </button>
                
            </div>

            <div className="ag-table-grid">
                <AgGridReact
                    ref={gridRef}
                    theme={agTableTheme}
                    rowData={rowData}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    pagination={true}
                    paginationPageSize={10}
                    paginationPageSizeSelector={[10, 20, 50, 100]}
                />
            </div>
        </div>
    );
};

export default DataGrid;

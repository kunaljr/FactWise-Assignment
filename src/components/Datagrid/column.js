export const columnDefs = [
    {
        headerName: 'Personal Info',
        children: [
            { headerName: 'ID', field: 'id', maxWidth: 80 },
            {
                headerName: 'Name',
                valueGetter: p => `${p.data.firstName} ${p.data.lastName}`,
            },
            { headerName: 'Email', field: 'email', sortable: true, filter: true },
            { headerName: 'Age', field: 'age' },
            { headerName: 'Location', field: 'location' },
            {
                headerName: 'Skills',
                field: 'skills',
                valueGetter: p => p.data.skills?.join(', '),
                autoHeight: true,
                flex: 2,
            },
            { headerName: 'Hire Date', field: 'hireDate', filter: true },
        ],
    },
    {
        headerName: 'Job Info',
        children: [
            { headerName: 'Department', field: 'department' },
            { headerName: 'Position', field: 'position' },
            { headerName: 'Manager', field: 'manager' },
        ],
    },
    {
        headerName: 'Performance',
        children: [
            { headerName: 'Salary ($)', field: 'salary' },
            { headerName: 'Projects', field: 'projectsCompleted' },
            { headerName: 'Rating', field: 'performanceRating' },
            {
                headerName: 'Active',
                field: 'isActive',
                cellRenderer: p => (p.value ? 'Yes' : 'No'),
                maxWidth: 100,
            },
        ],
    },
];

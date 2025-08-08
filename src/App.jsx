import { useState, useEffect } from 'react';

import Header from './components/Layout/Header';
import DataGrid from './components/Datagrid/DataGrid';
import './assets/styles/app.css';
import './assets/styles/theme.css';

function App() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        
    }, [theme]);

    return (
        <>
            <Header toggleTheme={toggleTheme} theme={theme} />
            <DataGrid theme={theme}/>
        </>
    );
}

export default App;

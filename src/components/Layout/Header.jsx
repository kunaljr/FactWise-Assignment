import '../../assets/styles/header.css';

const Header = ({ toggleTheme, theme }) => {
    return (
        <header className={`dashboard-header ${theme === 'dark' ? 'dark' : 'light'}`}>
            <h1>FactWise Employees Dashboard</h1>
            <button className="theme-toggle" onClick={toggleTheme}>
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
        </header>
    );
};

export default Header;

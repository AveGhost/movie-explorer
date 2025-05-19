import '@theme-toggles/react/css/Classic.css'
import { Classic } from '@theme-toggles/react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggleButton = () => {
    const { theme, setTheme } = useTheme();
    return (
        <Classic
        duration={750}
        style={{
            color: theme === 'light' ? '#000' : 'yellow',
            fontSize: '2.1em',
        }}
        forceMotion={true}
        toggled={theme === 'light'}
        toggle={() => setTheme(theme === 'light' ? 'dark' : 'light')}/>
    )
}

export default ThemeToggleButton
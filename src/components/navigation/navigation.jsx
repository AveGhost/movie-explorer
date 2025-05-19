import ThemeToggleButton from "../theme-toggle-button/theme-toggle-button"

const Navigation = ({children}) => {
    return (
        <nav className='grid grid-cols-[1fr_auto] justify-between gap-4 mb-10 mx-auto'>
            {children}
            <ThemeToggleButton />
        </nav>
    )
}

export default Navigation
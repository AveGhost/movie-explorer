import ThemeToggleButton from "../../components/theme-toggle-button/theme-toggle-button"
import useTypewriter from "../../hooks/useTypewriterHook"
import SearchInput from "../../components/search-input/search-input"
import { useNavigate } from "react-router"
import { useState } from "react"

function Home() {
  const navigate = useNavigate()
  const title = useTypewriter("Movie Explorer", 75)
  const [searchedTitle, setSearchedTitle] = useState('')

  const handleInputChange = (event) => {
    setSearchedTitle(event.target.value)
  }

  const handleClick = () => {
    navigate(`/search/${searchedTitle}`)
  }

  return (
    <main className='container mx-auto h-full relative'>
        <span className="absolute top-2 right-2"><ThemeToggleButton /></span>
        <div className="h-full flex flex-col gap-6 justify-center items-center max-w-[700px] mx-auto">
          <h1 className="text-8xl intro-title">{title}</h1>
          <SearchInput placeholder={'Movie title...'} value={searchedTitle} onChange={handleInputChange} />
          <button disabled={!searchedTitle} onClick={handleClick} className={`border-[#444C54] w-[170px] border-1 p-2 overflow-hidden relative hover:text-white transition-colors duration-300 before:content-[''] before:absolute before:left-1/2 before:top-1/2 before:w-[300px] before:h-[300px] before:translate-x-[-50%] before:scale-0 before:translate-y-[-50%] before:rounded-full before:bg-[#444C54] before:transition-all before:duration-500 before:z-[-1] hover:before:scale-100 hover:before:translate-x-[-50%] hover:before:translate-y-[-50%] ${!searchedTitle ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}>Search</button>
        </div>
    </main>
  )
}

export default Home

import getFilms from '../../utils/GetFilms'
import { useState, useEffect } from 'react'
import Navigation from '../../components/navigation/navigation'
import FilmCard from '../../components/film-card/film-card'
import SearchInput from '../../components/search-input/search-input'
import Pagination from '../../components/pagination/pagination'
import useDebounce from '../../hooks/useDebounceHook'
import SkeletonLoader from '../../components/skeleton/skeleton-loader'
import { Link, useParams } from 'react-router'
import useTypewriter from '../../hooks/useTypewriterHook'

function SearchPage() {
  const title = useTypewriter("Movie Explorer", 75)
  const {name} = useParams()
  const [films, setFilms] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [searchMovie, setSearchMovie] = useState('');
  const debounceSearch = useDebounce(searchMovie, 500);
  const [errorMessage, setErrorMessage] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [totalPages, setTotalPages] = useState(0)


  const handleInputChange = (event) => {
    setSearchMovie(event.target.value);
    setIsSearching(true);
    setCurrentPage(1)
  };

  useEffect(() => {
    const fetchFilms = async () => {
      setIsSearching(true);
      const data = await getFilms({search: debounceSearch ? debounceSearch : name, page: currentPage})
      if(data.Response === 'False') {
        setErrorMessage(data.Error)
        setIsSearching(false)
        setTotalPages(0)
        return
      } else {
        setFilms(data)
        setErrorMessage('')
        setIsSearching(false)
        setTotalPages(Math.ceil(data.totalResults / 10))
      }
    }

    fetchFilms()
  },[currentPage, debounceSearch])

  return (
    <main className='container mx-auto'>
      <Link to={'/'} className="text-3xl text-center mb-10 intro-title block">{title}</Link>
      <Navigation>
        <SearchInput value={searchMovie} onChange={handleInputChange} />
      </Navigation>
      {isSearching && <SkeletonLoader />}
      {films && !isSearching && !errorMessage ?
      <>
        <div className='grid grid-cols-4 gap-6'>
          {films.Search.map((film) => (
            <FilmCard key={film.imdbID} film={film} />
          ))}
        </div>
      </> : <p className='text-red-500 text-2xl'>{errorMessage}</p>}
      {totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} onClick={(page) => setCurrentPage(page)} />}
    </main>
  )
}

export default SearchPage

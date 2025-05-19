const SearchInput = ({value, onChange, placeholder}) => {
    return (
        <input type='text' value={value} onChange={onChange} name='search' placeholder={placeholder ? placeholder : 'Search...'} className='p-2 border-1 placeholder:text-zinc-700 dark:placeholder:text-zinc-300 mx-auto w-full border-zinc-600' />
    )
}

export default SearchInput
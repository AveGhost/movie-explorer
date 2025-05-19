const Pagination = ({currentPage, totalPages, onClick}) => {
    const pages = [];

    pages.push(1);

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 2);

    if (start > 2) {
        pages.push('...');
    }

    for (let i = start; i <= end; i++) {
        pages.push(i);
    }

    if (end < totalPages - 1) {
        pages.push('...');
    }

    if (totalPages > 1) {
        pages.push(totalPages);
    }

    return (
        <div className='w-full flex justify-center gap-4 py-6'>
            {pages.map((page,index) => (
                page === '...' ? (
                    <span key={index}>...</span>
                ) : (
                    <button key={index} onClick={() => onClick(page)} className={`border-1 cursor-pointer border-zinc-600 w-8 h-8 text-sm hover:bg-zinc-600 hover:text-white transition-colors duration-300 ${page === currentPage && 'bg-zinc-600 text-white'}`}>{page}</button>
                )
            ))}
        </div>
    )
}

export default Pagination
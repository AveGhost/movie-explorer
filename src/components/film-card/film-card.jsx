import { Icon } from "@iconify/react/dist/iconify.js"
import { useLiked } from "../../context/LikedContext"

const FilmCard = ({film}) => {
  const {liked, setLiked} = useLiked()
  const handleToggleLike = (id) => {
    setLiked((prev) => {
      const alreadyLiked = prev.includes(id);
      const updated = alreadyLiked
        ? prev.filter(item => item !== id)
        : [...prev, id];
      return updated;
    });
  };

  return (
      <div key={film.imdbID} className='relative w-full aspect-square overflow-hidden after:bg-gradient-to-b after:from-zinc-800/70 after:to-transparent after:absolute after:inset-0 after:z-0'>
        <div className="absolute top-2 right-2 z-10 flex items-center gap-2">
            <Icon icon={`${liked && liked.includes(film.imdbID) ? "mdi:heart" : "mdi:heart-outline"}`} width="20" height="20" className="cursor-pointer text-white" onClick={() => handleToggleLike(film.imdbID)} />
        </div>
        <img src={film.Poster !== 'N/A' ? film.Poster : 'https://fakeimg.pl/450x250/'} alt={film.Title} className='h-full w-full object-cover' />
        <div className='absolute bottom-0 left-0 right-0 dark:bg-zinc-800/90 bg-zinc-200/90 p-4 flex flex-col justify-between min-h-[120px] gap-2'>
          <h2 className='text-xl dark:text-white font-medium'>{film.Title}</h2>
          <div className='flex justify-between items-center'>
            <p className='text-sm dark:text-zinc-400 flex items-center gap-2'>Year: <span>{film.Year}</span></p>
            <p className='text-sm dark:text-zinc-400 flex items-center gap-2'>Type: <span>{film.Type}</span></p>
          </div>
        </div>
      </div>
  )
}

export default FilmCard
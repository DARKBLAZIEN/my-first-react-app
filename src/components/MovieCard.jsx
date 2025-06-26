import React from 'react'
import '../App.css'

const MovieCard = ({movie}) => {
  return (
    <div className='movie-card'>
        <div className="d-flex flex-row justify-content-center p-3">
            <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}` : `/no-movie.png`} alt="" className='w-80'/>
        </div>
        <h5 className="card-title ml-3">{movie.title}</h5>
        <div className="rating">
            <div className="img">
                <img src="../Rating.svg" alt="" className="mb-3 ml-3" />
            </div>
            <p>{movie.vote_average.toFixed(1)}</p>
            <span className='mb-3 text-white'>•</span>
            <p  className='text-light-200 text-width' >{movie.release_date.split("-")[0]}</p>
            <span  className='mb-3 text-white'>•</span>
            <p  className='text-light-100 text-width' >{movie.original_language.charAt(0).toUpperCase() + movie.original_language.slice(1)}</p>
        </div>
    </div>
  )
}

export default MovieCard
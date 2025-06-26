import React from 'react'
import '../App.css'

const MovieCard = ({movie}) => {
  return (
    <div className='movie-card'>
        <div className="d-flex flex-row justify-content-center p-3">
            <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}` : `/no-movie.png`} alt="" className='w-80'/>
        </div>
        <h5 className="card-title p-4">{movie.title}</h5>
        <div className="rating">
            <div className="img">
                <img src="" alt="" className="star" />
            </div>
            <p>{movie.vote_average}</p>
        </div>
    </div>
  )
}

export default MovieCard
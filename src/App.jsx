import React, { useState,useEffect } from 'react'
import './App.css'
import MovieCard from './components/MovieCard';
import Search from './components/Search'
import { Spinner } from './components/Spinner';
const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept : 'application/json',
    Authorization : `Bearer ${API_KEY}`
  }
}

const App = () => {
  const [searchTerm,setSearchTerm] = useState('');
  const [errorMessage,seterrorMessage]=useState('');
  const [moviesList, setmoviesList] = useState([]);
  const [isloading, setisloading] = useState(true);
  const fetchmovies = async (query) => {
    

    try{
      const endpoint = query ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`  : `${API_BASE_URL}/discover/movie?api_key=${API_KEY}`;
      const response = await fetch(endpoint, API_OPTIONS);     
      if(!response.ok){
        throw new Error(`Failed to fetch movies`)

      }
      const data = await response.json();
      if(data.response === false){
        seterrorMessage('Failed to load movies')
        setmoviesList([])
        return;
      }
      setmoviesList(data.results)
      console.log(data);
    }catch(error){
      console.log(`Error found : ${Error}`);
      seterrorMessage('Error fetching movies, try again later');
    }finally{
      setisloading(false)
    }
  }
  useEffect(()=>{
    fetchmovies(searchTerm);
  },[searchTerm]);
  return (
    <div>
      <main >
        <div className="background-banner">
          <div className="for-image-align">
            <img src="/public/hero-img.png" alt="" className="movie-banner" />
          </div>
          <div className="for-text-align d-flex flex-row justify-content-center">
            <h1 className="main-text">
              Find your <span className='special-effect'>favourite movies</span><br /> Hassle-Free
            </h1>
          </div>
          
          <Search searchTerm={searchTerm}  setSearchTerm={setSearchTerm} />
          <br />
          <p className='errormsg'>
            {errorMessage}
          </p>
        </div>
        
        <div className="container movie-list">
          <div className="row">
            {isloading ? (
              <Spinner />
            ) : errorMessage ? (
              <p>{errorMessage}</p>
            ) : (
              moviesList.map((movie) => (
                <div className="col-12 col-lg-3 col-sm-6 mb-4" key={movie.id}>
                  <MovieCard key={movie.id} movie={movie} />
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
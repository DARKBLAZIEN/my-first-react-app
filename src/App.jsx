import React, { useState,useEffect } from 'react'
import './App.css'
import Search from './components/Search'
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
  const fetchmovies = async () => {
    try{
      const endpoint = `${API_BASE_URL}/discover/movie?api_key=${API_KEY}`;
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
    fetchmovies();
  },[]);
  return (
    <div>
      <main className='bg'>
        <div className="background-banner">
          <div className="for-image-align">
            <img src="../public/hero-img.png" alt="" className="movie-banner" />
          </div>
          <h1 className="main-text">
            Find your <span className='special-effect'>favourite movies</span><br /> Hassle-Free
          </h1>
          <Search searchTerm={searchTerm}  setSearchTerm={setSearchTerm} />
          <br />
          <p className='errormsg'>
            {errorMessage}
          </p>
        </div>
        
        <h1 className="heading">
            All movies
        </h1>
        <div className="movie-list">
          {isloading ? (<p>Loading...</p>) : errorMessage ? (<p>{errorMessage}</p>) : (
            <ul>
              {moviesList.map((movie) => (
                <p className='texts'>{movie.title}</p>))}
            </ul>
          )}
        </div>
      </main>
    </div>
  )
}

export default App
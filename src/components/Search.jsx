import React from 'react'
import '../App.css'

const Search = ({searchTerm,setSearchTerm}) => {
  return (
    <div className='align-search m-3'>
      <div className="search-box d-flex flex-row ">
        <img src="../search.svg" alt="" className="search-icon size-5 mt-3 mr-3" />
        <input
        className='search-box1 border-none outline-none'
        type="text"
        placeholder='Search your favourite movie' 
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}  /> 
      </div>
        
    </div>
  )
}

export default Search
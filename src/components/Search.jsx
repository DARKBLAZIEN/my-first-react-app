import React from 'react'
import '../App.css'

const Search = ({searchTerm,setSearchTerm}) => {
  return (
    <div className='align-search m-3'>
        <input
        className='search-box'
        type="text"
        placeholder='Search your favourite movie' 
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}  />
    </div>
  )
}

export default Search
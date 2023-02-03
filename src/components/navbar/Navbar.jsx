import React from 'react'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  const navigate = useNavigate();
  const [VideoSearch,setvideosearch] = useState('')
  const SubmitSearch = (e)=>{
    e.preventDefault();
    if(!VideoSearch) return 
  navigate(`/search/${VideoSearch}`)
  setvideosearch('');
  }
  return (
    <nav className="bg-dark   text-light ">
      <div className="container">
        <a  className='logo navbar-brand' onClick={()=>navigate('/')} >
          <i className="fa-brands fa-youtube"></i>Youtube
        </a>
        <form className="d-flex " role="search">
          <input 
            onChange={(e)=>setvideosearch(e.target.value)}
            value={VideoSearch} 
            className="form-control me-2"  
            type="search" placeholder="Search" 
            aria-label="Search" 
          />
          <button onClick={SubmitSearch} className="btn" type="submit">Search</button>
        </form>
        <button onClick={()=>navigate('/Savedvideos')} className='btn btn-danger'><i class="fa-solid fa-bookmark"></i></button>
      </div>
  </nav>
  )
}

export default Navbar
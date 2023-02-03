import React from 'react'
import './error.css';

const Error = () => {
  return (
    <div className='error'>
      <div className='rounded text-light p-2 bg-danger error-info'>
        <h2 > page not found</h2>
        <h1 > 404</h1>
      </div>
    </div>
  )
}

export default Error
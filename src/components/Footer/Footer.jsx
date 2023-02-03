import React from 'react'
import './Footer.css';
import { useNavigate } from 'react-router-dom';
const Footer = () => {
  const naviagte=useNavigate()
  return (
    <div  className='footer p-2 fixed-bottom d-flex justify-content-between align-items-center' >
        <p className='text-secondary mb-0'>copyright by me 2022-2023 </p>
        <ul className='d-flex gap-2 mb-0'>
          <li><a target='_blank' href='https://www.facebook.com/amir.souaf.7'><i class="fa-brands fa-facebook"></i></a></li>
          <li><a target='_blank' href='https://www.facebook.com/amir.souaf.7'><i class="fa-brands fa-twitter"></i></a></li>
        </ul>
    </div>
  )
}

export default Footer
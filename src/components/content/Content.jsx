import React from 'react'
import Categories from '../categories/Categories'
import MainContent from '../mainContent/MainContent'
import { useState } from 'react';
import './content.css';
import { useEffect } from 'react';
import { fetchData } from '../../context/fetchApi';

const Content = () => {
  const [videocategorized ,setVideoCategorized] = useState([])
  const [category,setCategory] = useState('tout');
  const [Loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true)
    fetchData(`search?part=snippet&q=${category}`).then(
      (data)=>{
        return setVideoCategorized(data.data.items)
      }
    )
    console.log(videocategorized)
    setTimeout(()=>setLoading(false),2000)
  },[category])
  return (
    <div className='content '>
      <div className='container'>
          <Categories 
            category={category}
            setCategory={setCategory} 
          />
          <MainContent 
            videocategorized={videocategorized} 
            Loading={Loading} 
          />
      </div>
    </div>
  )
}

export default Content
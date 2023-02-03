import React from 'react'
import { useState ,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { fetchData } from '../../context/fetchApi';
import VideoData from '../VedioData/VideoData';
import ChannelData from '../channelData/ChannelData';



const SearchVideos = () => {
  const [searchedVideos,setSearchVideos]=useState([]);
  const { keySearch } = useParams();
  
  useEffect(() => {
    
    fetchSearchedVideos(keySearch);
    console.log(keySearch)
  },[keySearch]);

  const fetchSearchedVideos = async(key)=>{
    const response = await fetchData(`search?part=snippet&q=${key}`)
    console.log(response)
    return setSearchVideos(response.data.items);
  }
  

  return (
    <div className='container mt-5'>
        <div className='videoWrapper'>
           {searchedVideos.map(video=>(
                      video.id.channelId ? 
                      <>
                        <ChannelData  video={video} /> 
                      </>
                    :
                      <>
                        <VideoData video={video} />
                      </>
                
        ))}
       </div>
    </div>
  )
}

export default SearchVideos
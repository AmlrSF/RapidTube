import React from 'react';
import './VedioData.css';
import { useState } from 'react';
import {json, Link, useNavigate} from 'react-router-dom';

const VideoData = ({video}) => {
  const {id:{videoId},snippet 
  :{channelTitle,title,publishTime,thumbnails
:{medium:{url}}  }} = video;

  const publishAt = new Date(publishTime);
  const Hours = publishAt.getHours();
  const minute = publishAt.getMinutes();
  const navigate = useNavigate();
  const [addFAv,setAddFAV] = useState(true);
  const [savedVideos,setSavedVideos] = useState([]);

  const handelSave = (e)=>{
    const videos = JSON.parse(localStorage.getItem('favs')) || []
    const newVideoTosave = {
      id:videoId,
      image:url,
      channelTitle:channelTitle,
      publishTime:new Date(publishTime).getHours(),
      title:title,
      channelId:video?.snippet?.channelId,
    }
   
      
    let find = videos.find(video=> video.id === e.currentTarget.id);
    
    if(find) return 
    if(find == undefined){
      setSavedVideos([newVideoTosave ,...savedVideos]);
      console.log(savedVideos);
      localStorage.setItem('favs',JSON.stringify(savedVideos));
    }
  }
  return (
    
    <div key={channelTitle} className='video-holder' onClick={()=>{}}>
        <Link to={`/video/${videoId}`}>
          <img className='img' src={url} alt={title} />
        </Link>
        <div className='discription'>
            <div className='d-flex justify-content-between align-items-center'>
              <h4>{title.slice(1,20)}...</h4>
              
              <button id={videoId} onClick={handelSave} className='btn btn-secondary btn-circle'>
                {addFAv ?  <i class="fa-solid fa-plus"></i> : <i class="fa-solid fa-bookmark"></i>}
              </button>
              
            </div>
            <div className='d-flex align-items-center  justify-content-between'>
              <Link to={`/channel/${video?.snippet?.channelId}`}><p className='text-secondary'>{channelTitle}</p></Link>
              <p className='text-secondary'>il y a {Hours===0 ? `${minute} Mins`:`${Hours} Hours`}</p>
            </div>
        </div>
    </div>
  )
}

export default VideoData
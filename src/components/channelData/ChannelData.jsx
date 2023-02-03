import React from 'react'
import { useEffect } from 'react'
import './ChannelData.css';

import {useNavigate} from 'react-router-dom';

const ChannelData = ({video}) => {
  const navigate = useNavigate();
  return (
    <div className='channelData flex-column d-flex align-items-center justify-content-center'>
      <img className='channel-logo'
          onClick={()=>navigate(`/channel/${video?.snippet?.channelId}`)}
          src={video.snippet.thumbnails.high.url}
          alt={video.snippet.channelTitle}
      />
      <div className='d-flex gap-2 align-items-center'>
        <h3 className='text-center'>
        {video?.snippet?.channelTitle}</h3>
        <i className="text-primary fa-solid fa-circle-check"></i>
      </div>
      <p className='text-center'>{video?.snippet?.description}</p>
    </div>
  )
}

export default ChannelData
import React, { useEffect, useState } from 'react'
import './SavedVideos.css'
import { Link } from 'react-router-dom';
const SavedVideos = () => {
    const [savedVideos, setSavedVideos] = useState([]);

    const saved = JSON.parse(localStorage.getItem('favs')) || [];

    console.log(saved);
    return (
        <div className='container pt-2'>
            <h2 className=''>Saved Videos</h2>
            <div className='videoWrapper'>
            {saved.map(video=>(
                    <div key={video.id} className='saved'  onClick={()=>{}}>
                       <Link to={`/video/${video.id}`}>
                         <img className='img' src={video.image} alt={video.title} />
                       </Link>
                       <div className='discription'>
                           <div className='d-flex justify-content-between align-items-center'>
                             <h4>{video.title.slice(1,20)}...</h4>
                             
                           </div>
                           <div className='d-flex align-items-center  justify-content-between'>
                             <Link to={`/channel/${video.channelId}`}><p className='text-secondary'>{video.channelTitle}</p></Link>
                             <p className='text-secondary'>il y a {video.publishTime} Hours</p>
                           </div>
                       </div>
                   </div>
                ))}
            </div>
        </div>
    )
}

export default SavedVideos
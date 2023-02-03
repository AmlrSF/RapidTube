import React from 'react'
import './VideoDataPlayer.css';
import {useParams} from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import VideoData from '../VedioData/VideoData';

import { fetchData } from '../../context/fetchApi';
import { useState,useEffect } from 'react';
import ReactPlayer from 'react-player/youtube'
import Comments from '../Comments/Comments';


const VideoDataPlayer = () => {
  const navigate = useNavigate()
  const {id} = useParams();
  const [relatedVideos,setRelatedVideos] = useState([])
  const [video, setVideo] = useState([])
  const [loading,setLoading] = useState(false);
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c16325f58emsh5dbcd0689f7282cp163d69jsn522885501ba7',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  const [comments, setComments] = useState([]);

  useEffect(()=>{
    setLoading(true);

    getVideo(id);
    fetchRelatedVideos(id);
    fetchCommentRealtedTovideo(id)

    setTimeout(()=>setLoading(false),2000)
  },[id])


  const getVideo = (id)=>{
    fetchData(`videos?part=snippet,statistics&id=${id}`).then(
      (data)=>{
        setVideo(data.data.items[0])
      }
    )
  }

  const fetchRelatedVideos = (id)=>{
      fetchData(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
        (data)=>{
          setRelatedVideos(data.data.items)
      }
    )
  }

  const fetchCommentRealtedTovideo = (id)=>{
    fetchData(`commentThreads?part=snippet&videoId=${id}&maxResults=50`).then(
      (data)=>setComments(data.data.items)
    )
  }
  //  const {statistics:
  //   { 
  //     commentCount,
  //     favoriteCount,
  //     likeCount,
  //     viewCount
  //  }} = video;

  //  const {snippet:{
  //   channelTitle,
  //   description,
  //   title,
  //   publishedAt,
  //   tags,
  //   thumbnails
  //  }}= video; 

   const publishedTime = new Date(video?.snippet?.publishedAt);
   const month = publishedTime.getMonth();
   const Year = publishedTime.getFullYear();
   const day = publishedTime.getDay();
   var monthes = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
  return (
    <div className='video-player'>
        {loading ? 
        <div className='holder'>
        <div className="spinner-grow text-danger" style={{width: '3rem',height: '3rem'}} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
        :
          <>
              <div className='container pt-2'>
          <ReactPlayer  
                  url={`https://www.youtube.com/watch?v=${id}`}
                  className='react-player'
                  controls
                  width='100%'
                  height='550px'
            /> 
        </div>
        <div className='container'>
        <div class='discription-video'>
          <div className='title'>
          <div>
          <h3 style={{cursor:'pointer'}}  onClick={()=>navigate(`/channel/${video?.snippet?.channelId}`)}>{video?.snippet?.title}</h3>
          </div>
          <div className='d-flex align-items-center justify-content-between'>
            <div>
            <h5 className='mb-0' style={{cursor:'pointer'}}  onClick={()=>navigate(`/channel/${video?.snippet?.channelId}`)}>{video?.snippet?.channelTitle}{" "}<i className="text-primary fa-solid fa-circle-check"></i></h5>
              <p>published at {day} {monthes[month]}. {Year}</p>
            </div>
            <div className='statistics d-flex gap-3'>
                <p>{parseInt(video?.statistics?.viewCount).toLocaleString()} <i class="text-danger fa-sharp fa-solid fa-eye"></i></p>
                <p>{parseInt(video?.statistics?.likeCount).toLocaleString()} <i class="text-success fa-solid fa-heart"></i></p>
                <p>{parseInt(video?.statistics?.commentCount).toLocaleString()} <i class="text-warning fa-solid fa-comment"></i></p>
            </div>
          </div>
          </div>
        </div>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Videos related</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Show Comments</button>
          </li>
        </ul>
          <div class="tab-content" id="myTabContent">
                <div class="tab-pane pt-3 fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                    <div className='videoWrapper'>
                      {relatedVideos.map(video=>(
                        <VideoData video={video} />
                      ))}
                    </div>
                </div>
                <div class="p-2 tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                      <div className='comments'>
                        <Comments comments={comments} />
                      </div>
                  </div>
          </div>
      </div>
       </>
      }
    </div>
  )
}

export default VideoDataPlayer
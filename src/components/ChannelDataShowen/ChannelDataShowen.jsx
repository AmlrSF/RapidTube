import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Link, Outlet, Route, Routes, useParams } from 'react-router-dom'
import { fetchData } from '../../context/fetchApi';
import About from '../About/About';
import Accueil from '../Accueil/Accueil';
import './ChannelDataShowen.css';
import VideoData from '../VedioData/VideoData';
const ChannelDataShowen = () => {
  const {id} = useParams();

  const [channelData,setChannelData] =useState([])
  const [channelRelatedVideos,setRelatedVideos] =useState([])

  useEffect(()=>{
    fetchChannel(id);
    fetchVideosRealatedToChannel(id);
    
  },[id])

  const fetchVideosRealatedToChannel = async (id)=>{
    const response = await fetchData(`search?channelId=${id}&part=snippet%2Cid&order=date`);
    setRelatedVideos(response.data.items);
    console.log(response.data.items);
  }

  const fetchChannel = async (id)=>{
    const response = await fetchData(`channels?part=snippet&id=${id}`);
    setChannelData(response.data.items[0]);
    console.log(response.data.items[0]);
  }
  return (
    <div className='container'>
      <div className='Channel-info'>
        <img src={channelData?.brandingSettings?.image?.bannerExternalUrl} />
      </div>
      <div className='channel mb-3 d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center gap-2' >
          <img className='logo-channel'  src={channelData?.snippet?.thumbnails?.high?.url} />
          <div className='decriptop-channel'>
            <h3>{channelData?.snippet?.title}{" "}<i className="text-primary fa-solid fa-circle-check"></i></h3>
            <p className='mb-0'>{channelData?.snippet?.customUrl}</p>
            <p className='mb-0'>{parseInt(channelData?.statistics?.subscriberCount).toLocaleString()} Subscribers</p>
          </div>
        </div>
        <button className='btn btn-danger'>Subscribe</button>
      </div>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Home</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">description</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Statistics</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false" >About</button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane pt-3 fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
          <div className='videoWrapper'>
            {channelRelatedVideos.map(video=>(
              <VideoData video={video} />
            ))}
        </div>
        </div>
        <div class="p-2 tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
          <p>{channelData?.brandingSettings?.channel?.description}</p>
        </div>
        <div class="tab-pane d-flex pt-5 align-items-center justify-content-center gap-3 fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
              <div className='border p-3 border-danger'>{parseInt(channelData?.statistics?.subscriberCount).toLocaleString()} <i class="fa-brands text-danger fa-youtube"></i></div>
              <div className='border p-3 border-primary'>{parseInt(channelData?.statistics?.videoCount).toLocaleString()} <i class="fa-solid text-primary fa-video"></i></div>
              <div className='border p-3 border-warning'>{parseInt(channelData?.statistics?.viewCount).toLocaleString()} <i class="text-warning fa-sharp fa-solid fa-eye"></i></div>
        </div>
        <div class="tab-pane pt-1 fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
          <h5>Country <i class="fa-solid text-primary fa-greater-than"></i> {channelData?.snippet?.country} </h5>
          <h5>customUrl <i class="fa-solid text-primary fa-greater-than"></i> {channelData?.snippet?.customUrl} </h5>
          <h5>Channel name <i class="fa-solid text-primary fa-greater-than"></i> {channelData?.snippet?.title} </h5>
        </div>
      </div>
    </div>
  )
}

export default ChannelDataShowen
import React from 'react'
import {Routes,Route} from 'react-router-dom';
import "./App.css"

import Navbar from './components/navbar/Navbar';
import Content from './components/content/Content';
import VideoDataPlayer from './components/VideoDataPlayer/VideoDataPlayer';
import ChannelDataShowen from './components/ChannelDataShowen/ChannelDataShowen';
import SearchVideos from './components/SearchVedios/SearchVideos';
import Footer from './components/Footer/Footer';
import Error from './components/Error/Error';
import SavedVideos from './components/SavedVideos/SavedVideos';

const App = () => {
    return (
        <div className='wrapper'>
            <Navbar />
            <Routes>
                <Route exact path='/'  element={<Content />}/>
                <Route exact path='/search/:keySearch' element={<SearchVideos />} />
                <Route exact path='/video/:id' exact element={<VideoDataPlayer />}/>
                <Route exact path='/channel/:id' element={<ChannelDataShowen />}/>
                <Route exact path='*'  element={<Error />} />
                <Route exact path='/Savedvideos' element={<SavedVideos />} />
            </Routes>
            <Footer />
        </div>
    )
}
export default App;
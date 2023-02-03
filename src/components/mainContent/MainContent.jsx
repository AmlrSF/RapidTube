import React from 'react'

import './mainContent.css'
import YoutubeVideosOrChannels from '../YoutubeVideosOrChannels/YoutubeVideosOrChannels'
const MainContent = ({videocategorized,Loading}) => {
  return (
    <div className='main-content'>
      {Loading ? 
        <div className='holder'>
          <div className="spinner-grow text-danger" style={{width: '3rem',height: '3rem'}} role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      :
      <YoutubeVideosOrChannels videocategorized={videocategorized} />
    }
    </div>
  )
}

export default MainContent;
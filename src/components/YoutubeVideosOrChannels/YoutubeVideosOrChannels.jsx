import React from 'react'
import './YoutubeVideosOrChannels.css';

import ChannelData from '../channelData/ChannelData';
import VideoData from '../VedioData/VideoData';

const YoutubeVideosOrChannels = ({videocategorized}) => {
  return (
    <div className='videoWrapper'>
        {videocategorized.map(video=>(      
             video.id.channelId ? 
                <>
                  <ChannelData video={video}/>
                </>
              :
                <>
                  <VideoData video={video} />
                </>
          )
        )}
    </div>
  )
}

export default YoutubeVideosOrChannels
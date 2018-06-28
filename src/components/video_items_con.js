import React  from 'react'
import VideoItem from './video_item'


const VideoList =(props) =>{
    
    const videos= props.videos;
    const videoItems= videos.map((video)=><VideoItem video={video} onVideoSelect={props.onVideoSelect}/>) 
    return(
        
        <ul>
        {videoItems}
        </ul>
    )

    
    
    
    
    
}

export default VideoList
import React from 'react'


const VideoItem=(props)=>{
    const imgurl= props.video.snippet.thumbnails.default.url;
    const video =props.video
    return(
        <li onClick={()=>props.onVideoSelect(video)}>
        <div><img src={imgurl}/><span>
        {props.video.snippet.title}</span></div>
     
        </li>
    
    )
    
    
    
}

export default VideoItem
import React from 'react'

const VideoDetails = ({video})=>{
    
    if(!video){
        return (<div> loading....</div>)
    }
    
    const id=video.id.videoId;
    const url=`https://www.youtube.com/embed/${id}`;
                
    
    const vid= <div>
                <div><iframe src={url}></iframe></div>
                <div><strong>Title :</strong>{video.snippet.title}</div>
                <div><strong>Description:</strong> {video.snippet.description}</div>
                </div>
          
          
    
    return(vid)
       
        
    
}

export default VideoDetails
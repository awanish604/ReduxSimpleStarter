import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Searchbar from './components/search_bar'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_items_con'
import VideoDetails from './components/video_details' 

const YoutubeAPI = 'tobeenentered'

class Index extends Component
{
    searchLoad= ()=>{
        console.log('before the claling ')
          YTSearch({key:YoutubeAPI,term:this.state.term},(videos)=>{
         
              
            this.setState({videos:videos,
                          selectedVideo:videos[0]})
            console.log('hi just tries')
            console.log(this.state)
        })  
         
     }
    
    constructor(props){
         super(props)
        this.state={
            videos:[],
            selectedVideo:null,
            term:'white chair'
        }
        
      this.searchLoad() 
      
    }
    
     onVideoSelect=(video)=>{
        this.setState({
            selectedVideo:video
        })
       
    }
     
     
    
     getTerm =(term)=> {
        
         this.setState({
             term:term
         })
         this.searchLoad()
        
     }
     
     
    
   
    
    render(){
        //console.log(this.state)
        return(
        <div>
            <Searchbar getTerm={this.getTerm}/>
            <VideoDetails video={this.state.selectedVideo}/>
            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
        </div>
        
        )
    }
}






ReactDOM.render(<Index />, document.querySelector('.container'));

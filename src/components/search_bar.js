import React, { Component} from 'react'



class Searchbar extends Component{
    
    constructor(props){
        super(props)
        this.state={
            term:''
        }
    }
    
    onTextChange=(event)=> {
        console.log(event.target.value)
        this.setState({
            term:event.target.value
        })
        
    }
    
    render(){
        return(
            <div>
                <input onChange={this.onTextChange} />
                <button onClick={()=>{this.props.getTerm(this.state.term)}}>Search</button>
            </div>
            )
    }
    
    
}



export default Searchbar
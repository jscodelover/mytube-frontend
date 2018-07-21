import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import './UpDate.css';
import VideoDetail from '../VideoDetail/VideoDetail';
import Spinner from '../Spinner/Spinner';

class UpDate extends Component {
	state={
		videoList : {},
		des : '',
		_public : '',
		private : '',
		title : '',
    id : '',
    err : {},
    loading : false
	}
	
  componentDidMount(){
  		axios.get(`https://fathomless-tor-65108.herokuapp.com/videos?code=${this.props.code}`)
  			 .then(resposne => {
  			 	this.setState({ videoList : resposne.data });
  			 })
  			 .catch(err => {
  			 	this.setState({ err : err });
  			 })
  }	
  getData = e => {
  	if(e.target.name === 'describe')
     this.setState({des : e.target.value});
    else 
    	if(e.target.name === 'title')
    	 this.setState({title : e.target.value});
    else
      if(e.target.name === 'videoId')
        this.setState({id : e.target.value})  
    else
  	    e.target.value === 'private' ? 
  			this.setState({_public : '', private : 'private'}) :  this.setState({_public : 'public', private : ''});
  }
  onSubmit = () => {
     if(this.state.id === '' || this.state.id.length !== 11)
     {
        alert('Please check the video Id !!')
     }
     else{
        this.setState({loading : true})
        axios.post('https://fathomless-tor-65108.herokuapp.com/update', {
          code: this.props.code,
          des : this.state.des,
          title : this.state.title,
          private : this.state.private,
          id : this.state.id
        })
    .then(response => {
      this.setState({loading : false})
      alert(response.data);
    })
    .catch(error => {
      this.setState({loading : false})
      alert(error);
    });
  }
}  
  render() {
    return (
    	<div>
      { this.state.loading ? <Spinner /> : null }
    		<div id="wrapper">
           <h2>Video Info to be updated : </h2> 
	            <VideoDetail videoGetData={this.getData} />
              <form>
                <br />
                <span> Video Id (mention below): </span>
                <input type="text" name="videoId" className="videoInfo" onChange={this.getData} /> 
              </form>  
              <button className="submit" onClick={this.onSubmit}>Submit</button>
	        </div>
        	<div className="box">
	        	{
	        	    Object.keys(this.state.videoList).length > 0 ?  
	            	this.state.videoList.items.map(ele => {
	            		return(
	            			<div className="vdetail" key={ele.id.videoId}>
                      <h3>Video Id : {ele.id.videoId} </h3>
	            				<p><span className="heading">Desciption</span> : {ele.snippet.description}</p> 
	            				<p><span className="heading">Title</span> : {ele.snippet.title}</p>
	            				<img src={ele.snippet.thumbnails.default.url} alt="img " />	
	            			</div>
	            			);
	            	})
                :
                this.state.err === '' ? <h1> Video List is downloading..... please wait  </h1> :  <h1> Please login again </h1>
	            }
        	</div> 
        </div>	
    );
  }
}

const mapStateToProps = state => {
	return{
		code : state.code
	}
}
export default connect(mapStateToProps)(UpDate);

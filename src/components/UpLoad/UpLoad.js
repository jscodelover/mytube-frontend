import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import axios from 'axios';

import './UpLoad.css';
import VideoDetail from '../VideoDetail/VideoDetail';
import Spinner from '../Spinner/Spinner';

class UpLoad extends Component {
  state ={
  	 videoData : '',
  	 des : 'My YouTube Video',
  	 _public : 'public',
  	 private : '',
  	 title : 'Video',
  	 loading : false
  }

  componentDidMount(){
  	console.log("code", this.props.code)
  	var fileInput = document.getElementById('fileInput');
	var fileDisplayArea = document.getElementById('fileDisplayArea');

	fileInput.addEventListener('change', (e) => {
		
		$('#wrapper').append('<p id="wait">Please Wait !!</p>');

		var file = fileInput.files[0];
		var textType =  /.mp4$/;
		

		if (file.type.match(textType) || file.type !== undefined)
		{
			var reader = new FileReader();

			reader.onload = (file) => {
				this.setState({videoData : file.target.result});
				$('#wrapper').append('<video src="' + file.target.result + '" class="video" controls></video>');
				if($('.video').length)
					$('#wait').remove();
				$('.btn').css('display', 'block')
			}
			reader.readAsDataURL(file);
		} else {
			fileDisplayArea.innerText = "File not supported!"
		}
	});
  }
  uploadVideo = () => {
  	this.setState({loading : true})
	axios.post('https://fathomless-tor-65108.herokuapp.com/upload', {
	    code: this.props.code,
	    video: this.state.videoData,
	    des : this.state.des,
	    title : this.state.title,
	    public : this.state._public,
	    private : this.state.private
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

  videoHandle = e => {
  	if(e.target.name === 'describe')
     this.setState({des : e.target.value});
    else 
    	if(e.target.name === 'title')
    	 this.setState({title : e.target.value});
    else
  	    e.target.value === 'private' ? 
  			this.setState({_public : '', private : 'private'}) :  this.setState({_public : 'public', private : ''});
  }
  render() {
    return (
        <div id="wrapper">
        	{ this.state.loading ? <Spinner /> : null }
			<h1>Upload Video</h1>
			<div>
				<span>Select a video file (format .mp4): </span> 
				<input type="file" id="fileInput" />
			</div>
			<VideoDetail videoGetData={this.videoHandle} />
			<pre id="fileDisplayArea"></pre>
			<button className="btn" onClick={this.uploadVideo}>UpLoad</button>
		</div> 
    );
  }
}

const mapStateToProps = state => {
	return {
		code : state.code
	}
}

export default connect(mapStateToProps)(UpLoad);


//3GPP, AVI, FLV, MOV, MPEG4, MPEGPS, WebM and WMV. 
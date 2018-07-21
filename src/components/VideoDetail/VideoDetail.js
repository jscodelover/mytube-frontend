import React from 'react';

import './VideoDetail.css';

const videodetail = props => {
	return (
			<div className="detail">
	         	<form>
	         	    <span> Description : </span>
	         		<input type="text" name="describe" className="videoInfo" onChange={e => {props.videoGetData(e)}} />
	         		<br />
	         		<span> Title : </span>
	         		<input type="text" name="title" className="videoInfo" onChange={e => {props.videoGetData(e)}} />
	         		<br />
	         		<input type="radio" value="public" name="privacy" onClick={e => {props.videoGetData(e)}} /> Public
	         		<br />
	         		<input type="radio" value="private" name="privacy" onClick={e => {props.videoGetData(e)}} /> Private
	         	</form> 
	         </div>
		);
}
export default videodetail;

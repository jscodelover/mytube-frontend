import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './YoutubePage.css';
import upload from '../../Assets/upload.png';
import update from '../../Assets/update.png';

class YoutubePage extends Component {

  componentDidMount(){
      const urlParams = new URLSearchParams(this.props.location.search);
      console.log(urlParams.get('code'));
      const code = urlParams.get('code')
      this.props.setCode(code);
  }
  render() {

    return (
        <div className="optionDiv">
            <span className="card">
              <img src={upload} alt='upload' />
              <Link className="myactive" to="/upload">UpLoad Video</Link>
            </span>
            <span className="card">
              <img src={update} alt='update' />
              <Link className="myactive" to="update">UpDate Video</Link>
            </span>  
        </div> 
    );
  }
}

const mapDispatchToProps = dispatch => {
   return {
      setCode : code => dispatch({type : 'CODE', val : code})
   }
}

export default connect(null, mapDispatchToProps)(YoutubePage);

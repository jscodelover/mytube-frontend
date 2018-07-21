import React from 'react';

import './LoginBtn.css';

const loginBtn = () => {
    return (
      <div className="intro">
    	<p>Login with your google account to access your YouTube account to upload and update videos.</p>
        <a href="https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fyoutube.force-ssl&response_type=code&client_id=1006608561720-8jtfmfalcgtu8duncn2o5b08ekordhcg.apps.googleusercontent.com&redirect_uri=https://my18-api.firebaseapp.com/auth" className="loginLink">
        		Login with Gmail
        </a>
      </div>
    );
}

export default loginBtn;

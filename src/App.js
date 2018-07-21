import React, { Component } from 'react';
import { Route} from 'react-router-dom';

import LoginBtn from './components/LoginBtn/LoginBtn';
import YoutubePage from './components/YoutubePage/YoutubePage';
import UpLoad from './components/UpLoad/UpLoad';
import UpDate from './components/UpDate/UpDate';

class App extends Component {
  render() {
    return (
        <div>
          <Route exact path="/" component={LoginBtn} />
          <Route exact path="/auth" component={YoutubePage} />
          <Route path="/upload" component={UpLoad} />
          <Route path="/update" component={UpDate} />
        </div>
    );
  }
}


export default App;

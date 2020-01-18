import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import UserData from './components/UserData';

class App extends Component {
  constructor() {
    super();
    this.state = {
       userData: {}
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/jzanderson09')
    .then(res => this.setState({ userData: res.data }))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h1>App!</h1>
        <div className='App-container'>
          <UserData 
            user={this.state.userData}
          />
        </div>
      </div>
    );
  }
}

export default App;

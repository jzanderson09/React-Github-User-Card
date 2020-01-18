import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import UserCard from './components/UserCard';

class App extends Component {
  constructor() {
    super();
    this.state = {
       userData: {},
       userRepos: [],
       userFollowers: []
    }
  }

  componentDidMount() {

    // User Data:
    axios.get('https://api.github.com/users/jzanderson09')
    .then(res => this.setState({ userData: res.data }))
    .catch(err => console.log(err));

    // User Repo Data:
    axios.get('https://api.github.com/users/jzanderson09/repos')
    .then(res => this.setState({ userRepos: res.data }))
    .catch(err => console.log(err));

    // User Followers Data:
    axios.get('https://api.github.com/users/jzanderson09/followers')
    .then(res => this.setState({ userFollowers: res.data }))
    .catch(err => console.log(err));

  }


  render() {
    return (
      <div className="App">
        <h1>App!</h1>
        <div className='App-container'>
          <UserCard 
            user={this.state.userData}
            repos={this.state.userRepos}
            followers={this.state.userFollowers}
          />
        </div>
      </div>
    );
  }
}

export default App;

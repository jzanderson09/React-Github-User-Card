import React, { Component } from 'react';
import axios from 'axios';
import './App.scss';
import UserCard from './components/UserCard';
import UserRepos from './components/UserRepos';
import UserFollowers from './components/UserFollowers';
import UserFollowing from './components/UserFollowing';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: 'jzanderson09',
      userData: {},
      userRepos: [],
      userFollowers: [],
      userFollowing: []
    }
  }

  async componentDidMount() {
    this.fetchUsersReposAndData();
  }

  fetchUsersReposAndData = () => {
    // User Data:
    axios.get(`https://api.github.com/users/${this.state.currentUser}`)
    .then(res => this.setState({ userData: res.data }))
    .catch(err => console.log(err));

    // User Repo Data:
    axios.get(`https://api.github.com/users/${this.state.currentUser}/repos`)
    .then(res => this.setState({ userRepos: res.data }))
    .catch(err => console.log(err));

    // User Followers Data:
    axios.get(`https://api.github.com/users/${this.state.currentUser}/followers`)
    .then(res => this.setState({ userFollowers: res.data }))
    .catch(err => console.log(err));

    // User Following Data:
    axios.get(`https://api.github.com/users/${this.state.currentUser}/following`)
    .then(res => this.setState({ userFollowing: res.data }))
    .catch(err => console.log(err));
  };

  changeUser = username => {
    this.setState({ currentUser: username });
    this.fetchUsersReposAndData();
  };

  render() {
    return (
      <div className='App-container'>
        <UserCard 
          user={this.state.userData}
        />
        <UserRepos 
          repos={this.state.userRepos}
        />
        <UserFollowers
          followerCount={this.state.userData.followers}
          followers={this.state.userFollowers}
          changeUser={this.changeUser}
        />
        <UserFollowing 
          followingCount={this.state.userData.following}
          following={this.state.userFollowing}
          changeUser={this.changeUser}
        />
      </div>
    );
  }
}

export default App;

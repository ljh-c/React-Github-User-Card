import React from 'react';
import axios from 'axios';
import './styles.css';

import UserCard from './Components/UserCard';
import Followers from './Components/Followers';
import SearchForm from './Components/SearchForm';

class App extends React.Component {
  // constructor and super are still built into this class under the hood
  state = {
    username: 'ljh-c',
    user: {},
    followers: []
  };

  changeUser = (newUser) => {
    this.setState({
      username: newUser
    });
  };

  

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.username}`)
    .then(response => {
      // console.dir(response.data);
      this.setState({
        user: response.data
      });
    })
    .catch(error => console.log(error));
  }

  // prevProps is the 1st parameter
  // prevState is the 2nd parameter
  componentDidUpdate(prevProps, prevState) {
    if (this.state.username !== prevState.username) {
      console.log('CDU Invoked');
      this.setState()
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.user !== prevState.user) {
  //     console.log('CDU Invoked');
  //     axios.get('https://api.github.com/users/ljh-c/followers')
  //     .then(response => {
  //       const followerURLs = response.data.map(follower => follower.url);
  //       // console.dir(followerURLs);
  //       return followerURLs;
  //     })
  //     .then(followerURLs => {
  //       followerURLs.forEach((url, index) => {
  //         axios.get(url)
  //         .then(response => {
  //           followerURLs[index] = response.data;
  //         })
  //         .catch(error => console.log('Followers data not returned', error));
  //       });

  //       this.setState({
  //         followers: followerURLs
  //       });
  //     })
  //     .catch(error => console.log(error));
  //   }
  // }

  render() {
    return (
      <div className="App">
        <SearchForm changeUser={this.changeUser} />
        <UserCard handle={this.state.user.login} />
        <Followers username={this.state.username} />
      </div>
    );
  }
}

export default App;
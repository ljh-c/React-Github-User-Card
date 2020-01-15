import React from 'react';
import axios from 'axios';
import './styles.css';

import UserCard from './Components/UserCard';
import Followers from './Components/Followers';

import CurrentUser from './Components/CurrentUser';

class App extends React.Component {
  // constructor and super are still built into this class under the hood
  state = {
    username: 'ljh-c',
    user: {},
    followers: []
  };

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.username}`)
    .then(response => {
      // console.dir(response.data);
      this.setState({
        user: response.data
      });
    })
    // .then(response => {
    //   // console.dir(response.data);
    //   const followerURLs = response.data.map(follower => follower.url);
    //   return followerURLs;
    // })
    // .then(friends => {
    //   // console.dir(friends);
    //   friends.forEach((url, index) => {
    //     axios.get(url)
    //     .then(response => {
    //       friends[index] = response.data;
    //     })
    //     .catch(error => console.log('Followers data not returned', error))
    //   });

    //   this.setState({
    //     followers: friends
    //   });
    // })
    .catch(error => console.log(error));
  }

  // prevProps is the 1st parameter
  // prevState is the 2nd parameter
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
        <UserCard handle={this.state.user.login} />
        <Followers username={this.state.username} />
      </div>
    );
  }
}

export default App;
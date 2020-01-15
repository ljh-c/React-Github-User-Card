import React from 'react';
import axios from 'axios';

import UserCard from './UserCard';

class Followers extends React.Component {
  state = {
    followers: []
  };

  getFollowers = (username) => {
    axios.get(`https://api.github.com/users/${username}/followers`)
    .then(response => {
      response.data.forEach(follower => {
        axios.get(`https://api.github.com/users/${follower.login}`)
        .then(response => {
          this.setState({
            followers: [...this.state.followers, response.data]
          });
        });
      })
    })
    .catch(error => console.log('Followers data not returned', error));
  }

  componentDidMount() {
    // console.log(this.props.username);
    axios.get(`https://api.github.com/users/${this.props.username}/followers`)
    .then(response => {
      response.data.forEach(follower => {
        axios.get(`https://api.github.com/users/${follower.login}`)
        .then(response => {
          this.setState({
            followers: [...this.state.followers, response.data]
          });
        });
      })
    })
    .catch(error => console.log('Followers data not returned', error));
  }

  componentDidUpdate(prevProps) {
    if (this.props.username !== prevProps.username) {
      console.log('CDU in Followers Invoked');
      this.setState({followers: []}, this.getFollowers(this.props.username));
    }
  }

  render() {
    return (
      <>
        {this.state.followers.map(follower => {
          return (<UserCard key={follower.id} handle={follower.login} />)
        })}
      </>
    );
  }
}

export default Followers;
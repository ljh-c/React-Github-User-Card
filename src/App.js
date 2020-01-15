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

  getUser = (username) => {
    axios.get(`https://api.github.com/users/${username}`)
    .then(response => {
      // console.dir(response.data);
      this.setState({
        user: response.data
      });
    })
    .catch(error => console.log(error));
  };

  componentDidMount() {
    this.getUser(this.state.username);
  }

  // prevProps is the 1st parameter
  // prevState is the 2nd parameter
  componentDidUpdate(prevProps, prevState) {
    if (this.state.username !== prevState.username) {
      console.log('CDU Invoked');
      this.getUser(this.state.username);
    }
  }

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
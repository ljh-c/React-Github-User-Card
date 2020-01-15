import React from 'react';
import axios from 'axios';

import UserCard from './UserCard';

class Followers extends React.Component {
  state = {
    followers: []
  };
  
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

  render() {
    return (
      <>
        {this.state.followers.map(follower => {
          return (<UserCard handle={follower.login} />)
        })}
      </>
    );
  }
}

// function Followers({ followers }) {
//   return (
//     <>
//     {followers.map(follower => {
//       return (
//         <div className="card">
//           {follower.login}
//         </div>
//       );
//     })}
//     </>
//   );
// }

export default Followers;
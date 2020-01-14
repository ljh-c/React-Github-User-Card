import React from 'react';
import axios from 'axios';
import './styles.css';

import CurrentUser from './Components/CurrentUser';

class App extends React.Component {
  // constructor and super are still built into this class under the hood
  state = {
    user: {}
  };

  componentDidMount() {
    axios.get('https://api.github.com/users/ljh-c')
    .then(response => {
      console.dir(response.data);
      this.setState({
        user: response.data
      })
    })
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <CurrentUser handle={this.state.user.login} />
      </div>
    );
  }
}

export default App;
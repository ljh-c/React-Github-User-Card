import React from 'react';
import axios from 'axios';
import './App.css';

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

      </div>
    );
  }
}

export default App;
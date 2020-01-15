import React from 'react';

class SearchForm extends React.Component { 
  state = {
    query: ''
  }

  handleChange = event => {
    this.setState({ query: event.target.value });
  }
  
  handleSubmit = event => {
    event.preventDefault();

    this.props.changeUser(this.state.query);

    this.setState({query: ''});
  }

  render() {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          placeholder="View another user"
          value={this.state.query} 
          onChange={this.handleChange} 
        />
        <button type="submit">Go</button>
      </form>
      </>
    );
  }
}

export default SearchForm;
import React from "react";
import "./Search.css";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      search: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.searchFunc(this.state.search);
    this.setState({
      ...this.state,
      search: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Pokemon Trading Card Game</h1>
        <input
          type="text"
          placeholder="Search name..."
          onChange={this.handleChange}
          value={this.state.search}
        />
        <button class ="js-get-cards" type="submit">Get Cards</button>
      </form>
    );
  }
}

export default Search;
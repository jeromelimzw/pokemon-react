import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  onChange = event => {
    this.props.handleFilter(event.target.value);
  };

  render() {
    return (
      <input
        type="search"
        placeholder="finding Pokémon ..."
        className="pa3 w-50 f3 tc center ma5 br3 flex self-center"
        onChange={this.onChange}
      />
    );
  }
}

export default SearchBar;

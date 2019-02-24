import React, { Component } from "react";
import CardList from "./CardList";
import pokemon from "./pokemonData";
import SearchBar from "./SearchBar";
class App extends Component {
  constructor() {
    super();
    this.state = { pokemon, searchtext: "" };
  }

  handleFilter = searchtext => {
    this.setState({ searchtext });
  };

  render() {
    const { pokemon, searchtext } = this.state;
    return (
      <div>
        <h1 className="tc tracked-mega f1 white fw6 underline">Pokédex</h1>
        <SearchBar handleFilter={this.handleFilter} />
        <CardList pokemon={pokemon} filter={searchtext} />
      </div>
    );
  }
}

export default App;

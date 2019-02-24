import React, { Component } from "react";
import CardList from "./CardList";
import pokemon from "./pokemonData";
class App extends Component {
  constructor() {
    super();
    this.state = { pokemon };
  }

  render() {
    const { pokemon } = this.state;
    return (
      <div>
        <h1 className="tc tracked-mega f1 white fw6 underline">PokeDex</h1>
        <CardList pokemon={pokemon} />
      </div>
    );
  }
}

export default App;

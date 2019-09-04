import React from 'react';

export default class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();

  }
  renders (){
    return (
      <div>
        {
          this.props.pokemon.map( poke => {
            return <li> { poke.name} </li> 
          })
        }
      </div>
    )
  };
}
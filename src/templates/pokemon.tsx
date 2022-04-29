import { Link } from "gatsby";
import React from "react";

interface PokemonProps {
  pageContext: {
    pokemon: {
      name: string;
      id: number;
      abilities: { name: string; url: string }[];
      sprites: {
        front_default: string; // url
      };
    };
  };
}

const Pokemon = ({ pageContext: { pokemon } }: PokemonProps) => {
  return (
    <div style={{ width: 960, margin: "4rem auto" }}>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h2>Abilities</h2>
      <ul>
        {pokemon.abilities.map((ability) => (
          <li key={ability.name}>
            <Link to={`./pokemon/${pokemon.name}/ability/${ability.name}`}>
              {ability.name}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/pokemon">Back to all Pokémon</Link>
    </div>
  );
};

export default Pokemon;

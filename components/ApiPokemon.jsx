import { useState, useEffect } from "react";

export default function Pokemon() {
  const [pokemon, setPokemon] = useState([]);

  const getPokemon = async () => {
    try {
      const get = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const getData = await get.json();
      console.log();
      setPokemon(getData.results);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(pokemon);

  useEffect(() => {
    getPokemon();
  }, []);
  return (
    <div>
      <ul>
        {pokemon.map((items, pokemon) => {
          console.log(pokemon);
          return (
            <li key={pokemon}>
              {items.name}
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon + 1}.png`}
                alt=""
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

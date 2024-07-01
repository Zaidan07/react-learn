import { useState, useEffect } from "react";
import { List, Wrapper} from "./ApiPokemon.styled";
import CardComponent from "./card/CardComponent";

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
        <Wrapper>
        {pokemon.map((items, indexPoke) => {
          console.log(pokemon);
          return ( 

            <List key={pokemon}>
              <CardComponent pokemon={items.name} pokeindex={indexPoke}/>
            </List>
          );
        })}
        </Wrapper>
      </ul>
      {/* <ul>
        <Wrapper>
        {pokemon.map((items, indexPoke) => {
          console.log(pokemon)
          return (
            <List key={indexPoke}>
              {items.name}
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${indexPoke + 1}.png`} alt="" />
            </List>
          )
        })}
        </Wrapper>
      </ul> */}
    </div>
  );
}

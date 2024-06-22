import { useEffect } from "react"

export default function Pokemon(){

    const getPokemon = async() => {
        try {
            const get = await fetch('https://pokeapi.co/api/v2/pokemon/');

            const getData = await get.json();
            console.log(getData);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{getPokemon()});
    return(
        <div></div>
    )
}
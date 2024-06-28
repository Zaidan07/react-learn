import { Card, Image, Text } from "./CardComponent.styled"

export default function CardComponent ({pokemon, pokeindex}) {


    return <div>
        <Card>
        <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeindex + 1}.png`} alt="" />
        <Text><h1>{pokemon}</h1></Text>
        </Card>
    </div>
}
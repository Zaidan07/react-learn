import Pokemon from "../components/ApiPokemon";
import Counter from "../components/StateComponent";


function App() {

  return (
    <>
    <Pokemon />
     <Counter props={'Hello World'}/>
    </>
  )
}

export default App

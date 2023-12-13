import { useEffect } from 'react'
import './App.css'
import { CharacterList } from './components/character-list'
import { useRickAndMortyApi } from './services/rick-and-morty-api'
import RickHeader from './components/header'

function App() {

  const rickApi = useRickAndMortyApi()
  useEffect(()=> {
    rickApi.actions.getCharacters()
  }, [])

  console.log(rickApi.states.characters);
  

  return (
    <>
    <RickHeader></RickHeader>
     <CharacterList
     characters={rickApi.states.characters}
     />
    </>
  )
}

export default App

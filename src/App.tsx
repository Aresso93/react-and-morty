import { useEffect } from 'react'
import './App.css'
import { CharacterList } from './components/character-list'
import { useRickAndMortyApi } from './services/rick-and-morty-api'
import { useAxios } from './services/use-axios'

function App() {

  const rickApi = useRickAndMortyApi()

  useEffect(()=> {
    rickApi.actions.getCharacters()
  }, [])

  return (
    <>
     <CharacterList
     characters={rickApi.states.characters}
     />
    </>
  )
}

export default App

import { useEffect } from 'react'
import './App.css'
import { CharacterList } from './components/character-list'
import { useRickAndMortyApi } from './services/rick-and-morty-api'
import RickHeader from './components/header'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { CharacterCard } from './components/character-card'

function App() {

  const rickApi = useRickAndMortyApi()
  useEffect(()=> {
    rickApi.actions.getCharacters()
  }, [])

  console.log(rickApi.states.characters);
  

  return (
    <>
    <BrowserRouter>
    <RickHeader/>
    <Routes>

    <Route
    path='home'
    element={
      <CharacterList
      characters={rickApi.states.characters}
      />
    }
    >
      </Route>
    <Route
    path='details/:characterID'
    element={
      <CharacterCard
        id={rickApi.states.singleCharacter.id} 
        name={''} 
        status={''} 
        species={''} 
        gender={''} 
        image={''} 
        origin={undefined} 
        location={undefined}
        episode={[]}      />
    }
    >
    </Route>
    <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
   
     </BrowserRouter>
    </>
  )
}

export default App

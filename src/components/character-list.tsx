import { Character } from "../model/character"
import { CharacterCard } from "./character-card"

interface characterListProps{
    characters: Character[]
}

export function CharacterList(props: characterListProps){
    return (
    <>
    {props.characters.map((character: Character) => (
        <CharacterCard 
        name={character.name} 
        id={0} 
        status={character.status} 
        species={character.species} 
        gender={character.gender} 
        image={character.image} 
        //location={character.location} 
        //episode={character.episode}        
        //
        />
    ))}
    </>
    )
}
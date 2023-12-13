import React from "react";
import { Character } from "../model/character";
import { CharacterCard } from "./character-card";

interface characterListProps {
  characters: Character[];
}

export function CharacterList(props: characterListProps) {
  return (
    <>
    <div className="card-container">
      {props.characters?.map((character: Character) => (
        <React.Fragment key={character.id}>
          <CharacterCard
            name={character.name}
            id={0}
            status={character.status}
            species={character.species}
            gender={character.gender}
            image={character.image}
            location={[]}
            episode={[]}
          />
        </React.Fragment>
      ))}
      </div>
    </>
  );
}

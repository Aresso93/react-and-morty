import { useState } from "react";
import { useAxios } from "./use-axios";

export function useRickAndMortyApi(){
    const axios = useAxios()
    const [characters, setCharacters] = useState([])
    const [singleCharacter, setSingleCharacter] = useState({
        name: '',
        id: 0,
        image: '',
        gender: '',
        episode: [],
        location: {name: '', url: ''}
    })

    async function getCharacters(){
        const characterResp = await axios("/character")
        console.log('AAAAA', characterResp.data.results);
        setCharacters(characterResp.data.results)
    }

    async function getSingleCharacter(characterID: number){
        const singleCharacterResp = await axios("/character/"+characterID);
        console.log('BBBB', singleCharacterResp.data);
        setSingleCharacter(singleCharacterResp.data)
    }

    return {
        actions:{
            getCharacters,
            getSingleCharacter
        },
        states:{
            characters,
            singleCharacter
        }
    }

}

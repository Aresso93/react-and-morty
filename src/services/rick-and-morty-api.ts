import { useState } from "react";
import { useAxios } from "./use-axios";

export function useRickAndMortyApi(){
    const axios = useAxios()
    const [characters, setCharacters] = useState()

    async function getCharacters(){
        const characterResp = await axios("/character")
        console.log('AAAAA', characterResp.data.results);
        setCharacters(characterResp.data.results)
    }

    return {
        actions:{
            getCharacters
        },
        states:{
            characters
        }
    }

}

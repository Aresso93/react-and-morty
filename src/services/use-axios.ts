import axios from "axios";

export function useAxios(){
    const instance = axios.create({
        baseURL: 'https://rickandmortyapi.com/api/',
      });

    return instance
}

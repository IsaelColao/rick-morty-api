import { useEffect, useState } from "react"
import axios from "axios"

export const useCharacter = () => {
    const [data, setData] = useState([])

    useEffect(() =>{
        getCharacters();
        
    }, [])

    
    const getCharacters = async() => {
        const resp = await axios.get("https://rickandmortyapi.com/api/character")
        setData(resp.data)
    }

  return data;
}

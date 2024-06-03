import { useEffect, useState } from "react"

export const useCharacter = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [total, setTotal] = useState(0)

    const url = `https://rickandmortyapi.com/api/character?page=${page}`
    
    useEffect(() =>{
        getCharacters(url);       
    }, [url])

    useEffect(() =>{
        fetch("https://rickandmortyapi.com/api/character")
            .then((response) => response.json())
            .then((data) => setTotal(data.info.pages))
            .catch((error) => console.log(error))
    }, [])

    
    const getCharacters = (url) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data.results))
            .catch((error) => console.log(error))
    }

    console.log(total)
  return [data, page, total, setPage];
}

import { CardList } from './CardList'
import ImgError from "../assets/error.jfif"
import { ErrorLoad } from './ErrorLoad'


export const CharacterApp = ({ characters }) => {

    return (
        <>

            {characters != undefined ? 
            <>
             <h1 className='h1-principal'> Personajes de Rick and Morty</h1> 
             <CardList data={characters} />              
            </>
                : <ErrorLoad img={ImgError} />}

        </>
    )
}



import { CardList } from './CardList'
import ImgError from "../assets/error.jfif"
import { ErrorLoad } from './ErrorLoad'
import PropTypes from "prop-types"


export const CharacterApp = ({ characters, page, total, setPage }) => {
    
    const nextPage = () =>{
        setPage(page + 1)
    }

    const previousPage = () =>{
        setPage(page - 1)
    }

    return (
        <>

            {characters.length != 0 ? 
            <>
             <h1 className='h1-principal'> Personajes de Rick and Morty</h1> 
             <h2> Página: {page}</h2>
             <nav>
                <ul className="pagination d-flex justify-content-center align-items-center">
                    {page>1 ? <li className='page-item'>
                        <button className='page-link' onClick={previousPage}>Previo</button>
                    </li> : undefined}
                    {page < total ? <li className='page-item'>
                    <button className='page-link' onClick={nextPage}>Siguiente</button>
                    </li> : undefined}
                </ul>
             </nav>
             <CardList data={characters} />              
            </>
                : <ErrorLoad img={ImgError} />}

        </>
    )
}

CharacterApp.propTypes = {
    characters: PropTypes.array,
    page: PropTypes.number,
    total: PropTypes.number,
    setPage: PropTypes.func,
}

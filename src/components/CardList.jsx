import PropTypes from "prop-types"
import { Card } from './Card'

export const CardList = ({ data } ) => {
    return (
        <div className="container container-2 text-center">
            <div className='row row-cols-4'>
                {data.map( character =>(
                    <Card key={character.id} data={character}/> 
                )
                )}
                            
            </div>
        </div>
    )
}


CardList.propTypes = {
    data: PropTypes.array
}

import { useParams, useNavigate } from "react-router-dom";

export const CharacterInfoExtended = ({ characters = [] }) => {
    const { characterId } = useParams()
    const character = characters.find(char => char.id == characterId)
    const navigate = useNavigate()

    const handleReturn = () =>{
        navigate( -1 ) 
    }
    
    
    console.log(character)
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={character.image}
                    alt="No hay imagen"
                    className="img-thumbnail"
                />
            </div>

            <div className="col-8">
                <h3>{character.name}</h3>
                <ul className="list-group">
                    <li className="list-group-item"><b>Género:</b> {character.gender}</li>
                    <li className="list-group-item"><b>Especie:</b> {character.species}</li>
                    <li className="list-group-item"><b>Estado:</b> {character.status}</li>
                    <li className="list-group-item"><b>Ubicación:</b> {character.location.name}</li>
                </ul>


                <button className="btn btn-outline-info btn-custom" onClick={handleReturn}> Regresar</button>
            </div>
        </div>
    )
}

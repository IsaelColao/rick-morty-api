import PropTypes from "prop-types"
import {Link} from "react-router-dom"

export const Card = ({ data }) => {

    return (
        <div className="col mb-3">
            <div className="card">
                <img src={data.image} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text">Estado: {data.status}</p>
                    <Link to={`/character/${data.id}`}>
                       <button className="btn btn-primary">Info adicional</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    data: PropTypes.object
}


export const ErrorLoad = ({ img }) => {
    return (
        <div className="container container-error d-flex justify-content-center align-items-center">
            <div className="col col-5">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={img} className="img-fluid rounded-start" alt="..."></img>
                        </div>
                        <div className="col-md-8 align-self-center">
                            <div className="card-body">
                                <h5 className="card-title">Error de conexión</h5>
                                <p className="card-text">No fue posible establecer conexión con el servidor, recargue la página para volver a intentarlo</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

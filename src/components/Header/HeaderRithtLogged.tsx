import { Link } from "react-router-dom"


export const HeaderRithtLogged = ({id}:{id:string}) => {
    return (
        <>
            <div className="is-flex">
                <button className="button is-dark is-small is-responsive is-rounded mr-4 has-text-weight-bold">
                    <span>
                        <i className="fa-regular fa-circle-down"></i>
                    </span>
                    <span className="mx-2">
                        Instala la aplicacion
                    </span>
                    
                </button>
                <Link to={`/profile/${id}`}>
                    <button className="button is-rounded is-small is-responsive p-2 is-dark mr-4">
                        <span>
                            <i className="fa-solid fa-user"></i>
                        </span>
                    </button>
                    
                </Link>
                
            </div>
        </>
    )
}


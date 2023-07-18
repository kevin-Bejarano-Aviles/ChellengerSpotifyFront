import { Link, useNavigate } from "react-router-dom"
import { useContext } from 'react';
import { AuthContext } from "../../context/AuthContex";


export const HeaderRithtLogged = ({id}:{id:string}) => {
    const {user:userLogged,logout} = useContext(AuthContext)
    const navigate = useNavigate()
    const onLogOut = ()=>{
        logout()
        navigate('/home')
    }
    return (
        <>
            <div className="is-flex">
                <button onClick={onLogOut} className="button is-dark is-small is-responsive is-rounded mr-4 has-text-weight-bold">Cerrar sesión</button>
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


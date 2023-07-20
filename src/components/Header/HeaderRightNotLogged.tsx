import { Link } from "react-router-dom"
// import { login } from "../../helpers/Login"
import { useContext } from 'react';
import { AuthContext } from "../../context";


export const HeaderRightNotLogged = () => {
    const {login} = useContext(AuthContext)
    return (

        <>
            <div className="is-flex">
                <div className="premium">
                    <Link to='/' className="mx-3 has-text-grey-dark has-text-weight-bold">
                        <span>Premium</span>
                    </Link>
                    <Link to='/' className="mx-3 has-text-grey-dark has-text-weight-bold">
                        <span>Ayuda</span>
                    </Link>
                    <Link to='/' className="mx-3 has-text-grey-dark has-text-weight-bold">
                        <span>Descargar</span>
                    </Link>
                </div>
                <div>
                    <Link style={{
                         borderLeft:'1px solid #ffff',
                    }} to='/' className="mx-3 pl-3 has-text-grey-dark has-text-weight-bold ">
                        <span>Registarse</span>
                    </Link>

                    <button 
                        className="mx-3 button is-rounded is-small is-responsive has-text-weight-bold"
                        onClick={login}
                        >
                            Iniciar sesión
                    </button>
                </div>
            </div>
        </>
    )
}

import { useContext } from "react"
import { AuthContext } from "../context/AuthContex"
import { Navigate } from "react-router-dom";

interface MyComponentProp {
    children:JSX.Element
}

export const PublicRoutes:React.FC<MyComponentProp>= ({children}) => {
    const {logged} = useContext(AuthContext);


    return !logged ? children : <Navigate to={'/'}/>


}


import { useContext } from "react"
import { AuthContext } from "../context/AuthContex"
import { Navigate } from "react-router-dom";

interface MyComponentProp {
    children:JSX.Element
}

export const PrivateRoutes:React.FC<MyComponentProp>= ({children}) => {
    const {logged} = useContext(AuthContext);
    console.log({logged});
    
    const cosa = true

    return cosa ? children : <Navigate to={'/home'}/>


}


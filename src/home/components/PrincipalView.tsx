import { AuthContext } from "../../context/AuthContex";
import { ViewInfoLogged} from './ViewInfoLogged';
import { useContext } from 'react';


export const PrincipalView = () => {
    const {user} = useContext(AuthContext);
    return (
        <>  
            <ViewInfoLogged id={user?.id}/>
        </>
    )
}



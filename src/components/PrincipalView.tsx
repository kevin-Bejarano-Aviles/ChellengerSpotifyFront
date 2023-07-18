import { AuthContext } from "../context";
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



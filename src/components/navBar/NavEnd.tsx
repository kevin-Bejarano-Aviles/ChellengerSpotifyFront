import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContex';
import { NotLibrary } from './NotLibrary';
import { Library } from './Library';


export const NavEnd = () => {
    const {logged,user} = useContext(AuthContext);
    return(
        <>  
            {
                (user && logged) 
                ? <Library id={user.id}/>
                : <NotLibrary/>
            }
        </>
    )
}


import { Header } from "../../components/Header/Header";
import { AuthContext } from "../../context/AuthContex";
import { InfoNotLogged } from "./InfoNotLogged"
import { ViewInfoLogged} from './ViewInfoLogged';
import { useContext } from 'react';


export const PrincipalView = () => {
    const {logged,user} = useContext(AuthContext);
    return (
        <>  
            <div className="column is-three-quarters">
                <div className="is-flex is-flex-direction-column">
                    <Header/>
                    {
                    (user && logged)
                    ? <ViewInfoLogged id={user.id}/>
                    : <InfoNotLogged/>
                }
                </div>
            </div>    
        </>
    )
}



import { useEffect, useReducer} from "react"
import { apiSpotify } from "../services/apiGet/initApi";
import { User, UserLogged } from '../interfaces/userLogged';
import { AuthContext} from "./AuthContex";
import {authReducer} from './authReducer'
import { AuthAction, AuthState,tipos} from "./types";

const init =()=>{
    const user:User = JSON.parse(localStorage.getItem('user')!)
    const logged=!!user;
    return {user,logged}
}
/* console.log(init().user);
console.log(init().logged); */

const initialState:AuthState = {
    user:init().user,
    logged:init().logged,
    logout:async()=>{},
    login:()=>{},
}
export const AuthProvider = ({children}:{children:React.ReactNode})=>{
    const [authState,dispatch] = useReducer(authReducer,initialState)

    // console.log({authState});
    
    //todo 
    // ver como solucionar para que no se dispare el useEffect
    useEffect(()=>{
        checkIfUserLogin()
        console.log('asdasdasdadasdasd');
        
        // console.log('asdasdasd');    
        // checkIfUserLogin()  
    },[authState.logged]);
    const logoutFuntion = async()=>{
        try {
            const response = await apiSpotify.get('/api/auth/logout',{
                withCredentials:true
            })
            localStorage.removeItem('user');
            const action:AuthAction = {
                type:tipos.logout,
                payload:null
            }
            dispatch(action);
            
           
            
        } catch (error) {
            console.log(error);
        }
        
    }
    const userLogin =()=>{
        
        window.open('http://localhost:8000/api/auth/login/spotify','_self')
        checkIfUserLogin()
        // infoUser()
    }
    const checkIfUserLogin = async()=>{
        try {
            const {data} = await apiSpotify.get<UserLogged>('/api/auth/logged',{
                withCredentials:true
            });

            if(data.user){
                const action:AuthAction = {
                    type:tipos.login,
                    payload:data.user
                }
                dispatch(action);
                localStorage.setItem('user',JSON.stringify(data.user));
            }else{
                const action:AuthAction = {
                    type:tipos.logout,
                    payload:null
                }
                dispatch(action);
                localStorage.removeItem('user');
            }
        } catch (error) {
            console.log(error);
            
        }
    }

    return (
        <AuthContext.Provider value={{
            ...authState,
            logout:logoutFuntion,
            login:userLogin
        }}>
            {children}
        </AuthContext.Provider>
    )
}
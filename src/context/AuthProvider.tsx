import { useEffect, useReducer} from "react"
import { apiSpotify } from "../services/apiGet/initApi";
import { UserLogged} from '../interfaces/userLogged';
import { AuthContext } from "./AuthContex";
import { authReducer } from "./authReducer";
import { AuthAction, AuthState,tipos} from "./types";

const initialState:AuthState = {
    logged:false,
    user:null,
    logout:async()=>{

    }
}
export const AuthProvider = ({children}:{children:React.ReactNode})=>{
    const [authState,dispatch] = useReducer(authReducer,initialState)
    // const [user, setUser] = useState<User|null>(null);


    useEffect(()=>{
        checkIfUserLogin()
    },[])
    const logoutFuntion = async()=>{
        try {
            const response = await apiSpotify.get('/api/auth/logout',{
                withCredentials:true
            })
            console.log({response:response.data});
            const action:AuthAction = {
                type:tipos.logout,
                payload:null
            }
            dispatch(action);
            console.log('te saliste wey');
            
        } catch (error) {
            
        }
        
    }
    const checkIfUserLogin = async()=>{
        try {
            const {data} = await apiSpotify.get<UserLogged>('/api/auth/login',{
                withCredentials:true
            });
            if(data.user){
                const action:AuthAction = {
                    type:tipos.login,
                    payload:data.user
                }
                // localStorage.setItem('user',JSON.stringify(data.user))
                dispatch(action);
            }else{
                const action:AuthAction = {
                    type:tipos.logout,
                    payload:null
                }
                dispatch(action);
            }
        } catch (error) {
            console.log(error);
            
        }
    }

    return (
        <AuthContext.Provider value={{
            ...authState,
            logout:logoutFuntion
        }}>
            {children}
        </AuthContext.Provider>
    )
}
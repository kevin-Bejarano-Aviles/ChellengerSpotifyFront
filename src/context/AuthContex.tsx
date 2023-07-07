import { createContext } from "react";
import { AuthState } from "./types";


export const AuthContext = createContext<AuthState>({
    logged:false,
    user:null,
    logout:async()=>{
        
    }
})


import { AuthAction, AuthState, tipos } from "./types";



export const authReducer = (state:AuthState,action:AuthAction)=>{
    switch (action.type) {
        case tipos.login :
            return{
                ...state,
                logged:true,
                user:action.payload
            };
        case tipos.logout:
            return {
                ...state,
                logged:false,
                user:null
            };
        default:
            return state;
    }
}
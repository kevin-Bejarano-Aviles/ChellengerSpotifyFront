import { User } from "../interfaces/userLogged"

export const tipos = {
    login:"[Auth] Login",
    logout:"[Auth] Logout"
}
export type AuthAction = {
    type:typeof tipos.login;
    payload:User
}| {type:typeof tipos.logout;payload:null}

export interface AuthState {
    user: User | null;
    logged:boolean
    logout:()=>Promise<void>
  }
import { Users } from "../interfaces/dataAllUsers";

export const filterUserLogged = (id:string|undefined,users:Users[]) => {
        return users.filter(user => user.id !== id);
}
import { AuthContext } from "../../../context";
import { filterUserLogged } from "../../../helpers/filterUserLogged";
import { useAllUsers } from "../../../hooks"
import { useContext } from 'react';
import { CardListUser } from "./CardListUser";
import { NotificationCard } from "../NotificationCard";


export const CardHeroUser = () => {
    const {user} = useContext(AuthContext);
    const {allUsers,cantUsers,loadingUsers} = useAllUsers();
    const users =  filterUserLogged(user?.id,allUsers);
    console.log({cantUsers});
    
    return (
        <>
            <section className="hero">
                <div className="hero-body is-flex is-flex-direction-column pl-0 pb-0 pt-3">
                    <div className="is-flex is-justify-content-space-between">
                        <span className="ml-2 is-size-4 has-text-weight-bold has-text-white">Lista de usuarios</span>
                            {/* <button onClick={} className="button is-dark has-background-black"><span>Mostrar todo</span></button>  */}
                    </div>
                    {
                        (users.length>0)
                        ?
                            <CardListUser
                                loading = {loadingUsers}
                                users = { users }
                            />
                        :
                            <NotificationCard
                                content="Todavia no hay otros usuarios en la base de datos"
                            />
                    }
                    
                </div>
            </section>
        </>
    )
}


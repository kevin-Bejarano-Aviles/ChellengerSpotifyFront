import { Users } from "../../../interfaces/dataAllUsers"
import { CardItemUser } from "./CardItemUser"


export const CardListUser = ({users,loading}:{users:Users[],loading:boolean}) => {
    return (
        <>
            <div className="is-flex is-justify-content-flex-start is-flex-wrap-wrap">
                {
                    users.map(user => (
                        <CardItemUser
                            key={user.id}
                            {...user}
                            loading = {loading}
                        />
                    ))
                }
            </div>
        </>
    )
}


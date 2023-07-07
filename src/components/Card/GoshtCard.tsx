import { Users } from "../../interfaces/dataAllUsers"
import { ItemUndefinedCard } from "./ItemUndefinedCard"
import imgFake from '../../assets/spotify/images.png'
import { UserCard } from "./UserCard"

interface propsInGoshtCard {
    titulo:string,
    users?:Users[],
    content:any[]
}
export const GoshtCard:React.FC<propsInGoshtCard> = ({content,titulo,users}) => {
    
    
    
    return (
        <>
            <section className="hero">
                <div className="hero-body is-flex is-flex-direction-column pl-0 pb-0 pt-3">
                    <div className="is-flex is-justify-content-space-between">
                        <span className="ml-2 is-size-4 has-text-weight-bold has-text-white">{titulo}</span>
                    </div>
                    <div className="is-flex is-justify-content-flex-start is-flex-wrap-wrap">
                        {
                            (typeof users === 'undefined')
                            ? content.map(contenido=>(
                                <ItemUndefinedCard key={contenido.id}
                                image={imgFake}
                                title={contenido.title}
                                />
                            ))
                            : 
                            (users.length<=0)
                            ? 
                            <div className="is-flex is-align-items-center">
                                <div className="notification is-info ">
                                Todavia no hay otros usuarios en la base de datos
                                </div>
                            </div>
                            
                            : users.map(user=>{
                                console.log(user.id)
                                return (
                                    <UserCard 
                                        key={user.id}
                                        image={imgFake}
                                        title={user.user_name}
                                        userId = {user.id}
                                    />
                            
                                )
                            }
                                
                                
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

import { useNavigate } from "react-router-dom"
import { CardList } from "../CardList";
import { useMusicDb } from "../../../hooks";
import { Spinner } from "../../Spinner";
import { NotificationCard } from "../NotificationCard";


export const CardHeroMusicDb = ({id}:{id:string|undefined}) => {

    const {allMusicDbUser,loadingMusicDb} = useMusicDb(id,{
        initialLimit:5,
        initialOffset:0
    })

    const navigate = useNavigate();
    console.log({allMusicDbUser});
    
    const viewAllMusicSpotify = () =>{
        navigate(`user/${id}/music/db`);
    }
    return (
        <>
            <section className="hero">
                <div className="hero-body is-flex is-flex-direction-column pl-0 pb-0 pt-3">
                    <div className="is-flex is-justify-content-space-between">
                        <span className="ml-2 is-size-4 has-text-weight-bold has-text-white">Musicas de la DB</span>
                            <button onClick={viewAllMusicSpotify} className="button is-dark has-background-black"><span>Mostrar todo</span></button> 
                    </div>
                    {
                        (!loadingMusicDb)
                        ?
                            <Spinner/>
                        :
                            (allMusicDbUser.length<=0)
                            ?
                                <NotificationCard content="Todavia no hay musicas en la base de datos"/>
                            :
                                <CardList
                                    tracks = {allMusicDbUser}
                                />
                    }
                </div>
            </section>
        </>
    )
}



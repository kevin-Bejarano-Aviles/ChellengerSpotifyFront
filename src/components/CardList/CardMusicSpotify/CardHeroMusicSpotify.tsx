import { useNavigate } from "react-router-dom"
import { CardList } from "../CardList";
import { useMusicsSpotify } from "../../../hooks";
import { NotificationCard } from "../NotificationCard";
import { Spinner } from "../../Spinner";


export const CardHeroMusicSpotify = ({id}:{id:string|undefined}) => {

    const {allMusicsSpotifyUser,loadingMusicSpotify,totalMusicSpotify} = useMusicsSpotify(id,{
        initialLimit:5,
        initialOffset:0
    })

    console.log({totalMusicSpotify});
    
    const navigate = useNavigate();

    const viewAllMusicSpotify = () =>{
        navigate(`user/${id}/music/spotify`);
    }
    return (
        <>
            <section className="hero">
                <div className="hero-body is-flex is-flex-direction-column pl-0 pb-0 pt-3">
                    <div className="is-flex is-justify-content-space-between">
                        <span className="ml-2 is-size-4 has-text-weight-bold has-text-white">Musicas de Spotify</span>
                            <button onClick={viewAllMusicSpotify} className="button is-dark has-background-black"><span>Mostrar todo</span></button> 
                    </div> 
                    {
                        (!loadingMusicSpotify)
                        ?
                            <Spinner/>
                        :
                            (allMusicsSpotifyUser.length<0)
                            ?
                                <NotificationCard
                                    content="Todavia no hay musicas en tu profile de spotiy"
                                />
                            :
                                <CardList
                                    tracks = {allMusicsSpotifyUser}
                                />
                    }
                    
                </div>
            </section>
        </>
    )
}



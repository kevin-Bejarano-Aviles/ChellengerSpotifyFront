import { NavLink } from "react-router-dom";
import { useMusicDb } from "../../hooks/useGet/useMusicDb"
import { useMusicsSpotify } from "../../hooks/useGet/useMusicsSpotify";
import { Spinner } from "../Spinner";


export const Library = ({id}:{id:string}) => {
    

    const {totalMusicDb,loadingMusicDb} = useMusicDb(id,{
        initialLimit: 1,
        initialOffset:0
    });

    const {totalMusicSpotify,loadingMusicSpotify} = useMusicsSpotify(id,{
        initialLimit:1,
        initialOffset:0
    });
    const spotifyImg = 'https://misc.scdn.co/liked-songs/liked-songs-640.png'
    
    return (
        <>
            {
                (!loadingMusicSpotify)
                ?
                    <Spinner/>
                :   
                    <NavLink to={`/user/${id}/music/spotify`}>
                        <div className="card cardSongCustom">
                            <div className="card-content pl-3">
                                <div className="media">
                                    <div className="media-left">
                                        <figure className="image is-48x48">
                                            <img src={spotifyImg} alt="spotifyLike" />
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <p className="mt-1 title is-6 has-text-white">Musica de spotify</p>
                                        <p className="subtitle is-7 has-text-white">Playlist . {totalMusicSpotify} canciones</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </NavLink>
            }   
            {
                (!loadingMusicDb)
                ?
                    <Spinner/>
                :
                    <NavLink to={`/user/${id}/music/db`}>
                        <div className="card cardSongCustom ">
                            <div className="card-content pl-3">
                                <div className="media">
                                    <div className="media-left">
                                        <figure className="image is-48x48">
                                            <img src={spotifyImg} alt="spotifyLike" />
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <p className="mt-1 title is-6 has-text-white">Musica de tu BD</p>
                                        <p className="subtitle is-7 has-text-white">Playlist . {totalMusicDb} canciones</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </NavLink>
            }
        </>
    )
}


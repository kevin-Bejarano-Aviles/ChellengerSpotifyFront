import { NavLink } from "react-router-dom";
import { useMusicDb } from "../../hooks/useGet/useMusicDb"
import { useMusicsSpotify } from "../../hooks/useGet/useMusicsSpotify";


export const Library = ({id}:{id:string}) => {
    

    const {total:totalDb =0} = useMusicDb(id,{
        initialLimit: 1,
        initialOffset:0
    });

    const {total:totalSpotify,dataLoaded} = useMusicsSpotify(id,{
        initialLimit:1,
        initialOffset:0
    });
    const spotifyImg = 'https://misc.scdn.co/liked-songs/liked-songs-640.png'
    
    return (
        <>
            <div>
                {
                    (dataLoaded)
                    ?
                    <>
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
                                <p className="subtitle is-7 has-text-white">Playlist . {totalDb} canciones</p>
                            </div>
                        </div>
                    </div>
                </div>
            </NavLink>
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
                                <p className="subtitle is-7 has-text-white">Playlist . {totalSpotify} canciones</p>
                            </div>
                        </div>
                    </div>
                </div>
            </NavLink>
                </>
                    :
                    <button className="button is-loading">Loading</button>
                       
                    
                }
                
                
            </div>
        </>
    )
}


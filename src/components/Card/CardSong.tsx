import { NewTrack } from '../../interfaces/dataMusicDbOfUser';
import { CardItem } from "./CardSongItem"
import { Track as TrackSpotify } from "../../interfaces/dataMusicsSpotify"
import { Track } from "../../interfaces/dataSearch"

type PropsCard = {
    titulo:string;
    id:string;
    tracks:NewTrack[]|Track[]|TrackSpotify[];
    naviFunction: ()=> void;
}

export const CardSong:React.FC<PropsCard> = ({id,naviFunction,titulo,tracks}) => {
    
    return (
        <>
            <section className="hero">
                <div className="hero-body is-flex is-flex-direction-column pl-0 pb-0 pt-3">
                    <div className="is-flex is-justify-content-space-between">
                        <span className="ml-2 is-size-4 has-text-weight-bold has-text-white">{titulo}</span>
                        {/* <Link to={`user/${id}/music/spotify`}> */}
                            <button onClick={naviFunction} className="button is-dark has-background-black"><span>Mostrar todo</span></button> 
                        {/* </Link> */}
                    </div>
                    <div className="is-flex is-justify-content-flex-start is-flex-wrap-wrap">
                        {

                            tracks.map(track => (
                                <CardItem key={track.id}
                                    {...track}
                                />
                            ))
                        }
                    </div>
                </div>

            </section>
        </>
    )
}


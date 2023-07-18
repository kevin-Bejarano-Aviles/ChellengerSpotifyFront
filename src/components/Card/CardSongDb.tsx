import { NewTrack } from '../../interfaces/dataMusicDbOfUser';
import { CardItem } from "./CardSongItem"
import { Track as TrackSpotify } from "../../interfaces/dataMusicsSpotify"
import { Track } from "../../interfaces/dataSearch"
                            
type PropsCard = {
    id?:string|undefined
    titulo:string;
    tracks:NewTrack[]|Track[]|TrackSpotify[];
    naviFunction: ()=> void;
}

export const CardSongDb:React.FC<PropsCard> = ({naviFunction,titulo,tracks}) => {
    console.log({tracks})
    return (
        <>
            <section className="hero">
                <div className="hero-body is-flex is-flex-direction-column pl-0 pb-0 pt-3">
                    <div className="is-flex is-justify-content-space-between">
                        <span className="ml-2 is-size-4 has-text-weight-bold has-text-white">{titulo}</span>
                        
                            <button onClick={naviFunction} className="button is-dark has-background-black"><span>Mostrar todo</span></button> 
                    </div>
                    <div className="is-flex is-justify-content-flex-start is-flex-wrap-wrap">
                        {
                            
                            
                        ( tracks.length===0)
                            ?  
                            <div className="is-flex is-align-items-center">
                                <div className="notification is-info ">
                                    Todavia no hay musicas en tu base de datos
                                </div>
                            </div>
                            :
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



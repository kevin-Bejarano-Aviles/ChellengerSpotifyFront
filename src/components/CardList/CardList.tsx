import { NewTrack } from "../../interfaces/dataMusicDbOfUser"
import { Track } from "../../interfaces/dataMusicsSpotify"
import {Track as TrackSearch} from '../../interfaces/dataSearch'
import { CardItem } from "./CardItemMusic"


export const CardList = ({tracks}:{tracks:NewTrack[]|Track[]|TrackSearch[]}) => {
    return (
        <>
            <div className="is-flex is-justify-content-flex-start is-flex-wrap-wrap">
                {
                    tracks.map(track => (
                        <CardItem
                            key={track.id}
                            {...track}
                        />
                    ))
                }
            </div>
        </>
    )
}


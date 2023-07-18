import { Link } from "react-router-dom"
import { convertMiliSegToMinSeg } from "../../../helpers/MilisegToMin"
import { useOneSongUser } from "../../../hooks/useGet/useOneUserSong"
import { useContext } from 'react';
import { AuthContext } from "../../../context/AuthContex";
import { TrackSpotifyOrDbNotExist } from "../TrackSpotifyOrDbNotExist";
import { DbTrackExist } from "./DbTrackExist";
// type FormEvent = React.FormEvent<HTMLFormElement>;


export const TableItemDb = ({
    album,             
    artist_names,      
    duration_ms,      
    id,                
    image_preview_max, 
    image_preview_min, 
    track_name,        
    url_track,
    iterador,    
    music_api_id
}:{
    album:             string,
    artist_names:      string[],
    duration_ms:       number,
    id:                string,
    image_preview_max: string,
    image_preview_min: string,
    track_name:        string,
    url_track:         string,
    iterador:          number,
    music_api_id:      string,
}) => {
    const {user} = useContext(AuthContext)
    const {song} = useOneSongUser(user?.id,music_api_id)
    const dataSong = {
    album,             
    artist_names,      
    duration_ms,      
    id,                
    image_preview_max, 
    image_preview_min, 
    track_name,        
    url_track,
    iterador,
    
    }
    

    const durationMinSeg = convertMiliSegToMinSeg(duration_ms)
    return(
        <tr>
            <th className="pb-0 pt-3">{iterador}</th>
            <td>
                <div className="is-flex containerCustomSpam ">
                    <div className="is-align-self-center ">
                        <figure className="image is-35x35 mr-2">
                            <img src={image_preview_min} alt="" />
                        </figure>
                    </div>
                    <div className="is-flex is-flex-direction-column containerCustomSpam  mr-0">
                        <span className="is-size-6">{track_name}</span>
                        <div className="is-flex is-flex-wrap-nowrap containerCustomSpam ">
                        {
                            artist_names.map((artist,index)=>(
                                <span className="is-size-7 spamCustomTable " key={index}>{artist},</span>
                            ))
                        }
                        </div>
                        
                    </div>
                </div>
            </td>
            <td>
                <div className="is-flex is-align-self-center mt-2" >
                    <span className="is-size-6 has-text-justified">{album}</span> 
                </div>
            </td>
            <td>
                <div className="mt-2">
                    <Link to={`${url_track}`} target="_blank">
                    <button className="button is-small is-success is-rounded">
                       Link cancion
                    </button>
                    </Link>
                </div>
            </td>
            <td>
                {
                    (song===null)
                    ?   <TrackSpotifyOrDbNotExist data={dataSong} userId={user?.id}/>
                    :   <DbTrackExist trackId={song.id} userId={user?.id}/>
                }
            </td>
            <td className="pl-0">
                <div className="mt-2">
                    <span>{durationMinSeg.min}:{durationMinSeg.seg}</span>
                </div>
                
            </td>
        </tr>
    )
}


import { Link } from "react-router-dom"
import { convertMiliSegToMinSeg } from "../../helpers/MilisegToMin"
import { RecortarString } from "../RecortarString"


export const CardItem = ({
    id,
    url_track,
    track_name,
    album,
    image_preview_max,
    duration_ms
}:{
    id:string,
    url_track:string,
    track_name:string,
    album:string
    image_preview_max:string,
    duration_ms:number
}) => {
    const {min,seg} = convertMiliSegToMinSeg(duration_ms)
    
    return (
        <>
            <div className="card has-background-grey-dark m-3">
                <Link to={`${url_track}`}>
                    <div className="card-image">
                        <figure className="m-3 image is-213x213">
                            <img src={image_preview_max} alt={`imgSong ${track_name}`} />
                        </figure>
                    </div>
                    <div className=" is-flex is-flex-direction-column">
                        <div className=" has-text-white">
                            <span className="has-text-weight-bold has-text-centered"><RecortarString text={track_name} maxLength={12}/></span>
                        </div>
                        <div className="has-text-white is-flex is-justify-content-space-between card-footer-item">
                            <div>
                                <span><RecortarString text={album} maxLength={15}/></span>
                            </div>
                            <div className="">
                                <span>{min}:{seg}</span>
                            </div>
                        </div>
                        
                    </div>
                </Link>
                
            </div>
        </>
    )
}


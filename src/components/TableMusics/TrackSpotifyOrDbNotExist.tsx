import { useNavigate } from "react-router-dom";
import { addSong } from "../../hooks/usePost/addSong"
import { Track } from "../../interfaces/dataMusicsSpotify"


export const TrackSpotifyOrDbNotExist = ({data,userId}:{data:Track,userId:string|undefined}) => {
    const {addSongOnDb} = addSong();
    const navigate = useNavigate();
    const onSumbit = ()=>{
        addSongOnDb(userId,data);
        navigate('/');
    }
    return (
        <div className="mt-2 ml-3">
            <form onSubmit={onSumbit}>
                <button className="sumbitSong" >
                    <span className="has-text-light">
                        <i className= 'far fa-heart'></i>
                    </span>
                </button>
            </form>
        </div>
    )
}


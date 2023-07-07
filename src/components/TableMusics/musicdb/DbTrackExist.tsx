import { useNavigate } from "react-router-dom";
import { useDeletedTrack } from "../../../hooks/useDelete/useDeletedTrack"


export const DbTrackExist = ({userId,trackId}:{userId:string|undefined,trackId:string|null}) => {
    const {deleteTrack} = useDeletedTrack();
    const navigate = useNavigate()

    const onSumbit = ()=>{
        deleteTrack(userId,trackId)
        navigate('/');
    }

    return (
        <div className="mt-2 ml-3">
            <form onSubmit={onSumbit}>
                <button className="sumbitSong">
                    <span className="has-text-success">
                        <i className='fas fa-heart'></i>
                    </span>
                </button>
                
            </form>
            
        </div>
    )
}


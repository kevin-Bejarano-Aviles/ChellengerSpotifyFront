import { MsgDeletedTrack } from "../../interfaces/msgDeleteTrack";
import { apiSpotify } from "../../services/apiGet/initApi"


export const useDeletedTrack = () => {
    

    const deleteTrack = async(userId:string|undefined,trackId:string|null)=>{
        try {
            const response = await apiSpotify.delete<MsgDeletedTrack>(`/api/user/${userId}/favorite_songs/${trackId}`,{
                withCredentials:true
            });
            console.log(response.data.msg);
        } catch (error) {
            console.log(error);
        }
    }

    return {
        deleteTrack
    }
}


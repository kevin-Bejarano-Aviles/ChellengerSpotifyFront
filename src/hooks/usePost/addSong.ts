import { Track } from "../../interfaces/dataMusicsSpotify";
import { SuccesfulPost } from "../../interfaces/successfulPost";
import { apiSpotify } from "../../services/apiGet/initApi";


export const addSong = () => {
    
    const addSongOnDb = async(id:string|undefined,formMusic:Track)=>{
        try {
            const response = await apiSpotify.post<SuccesfulPost>(`/api/user/${id}/favorite_songs`,formMusic,{withCredentials:true});
            console.log(response.data.msg);
        } catch (error) {
            console.log(error);
            
        }
    }

    return {addSongOnDb};
}


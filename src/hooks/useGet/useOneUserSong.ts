import { useEffect, useState } from 'react';
import { OneSong, Song} from '../../interfaces/OneSong';
import { apiSpotify } from '../../services/apiGet/initApi';


export const useOneSongUser = (idUser:string|undefined,idSong:string)=>{
    const [song, setsong] = useState<Song|null>(null);

    useEffect(() => {
        getSong(idUser,idSong)
    }, [idUser,idSong]);
    const getSong = async(idUser:string|undefined,idsong:string)=>{
        try {
            const response = await apiSpotify.get<OneSong>(`/api/user/${idUser}/favorite_songs/${idsong}`,{
                withCredentials:true
            });
            setsong(response.data.song)
        } catch (error) {
            console.log(error);
        }
    }

    return {
        song
    }

}
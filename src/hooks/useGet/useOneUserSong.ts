import { useEffect, useState, useContext } from 'react';
import { OneSong, Song} from '../../interfaces/OneSong';
import { apiSpotify } from '../../services/apiGet/initApi';
import { AxiosError } from 'axios';
import { AuthContext } from '../../context';


export const useOneSongUser = (idUser:string|undefined,idSong:string)=>{
    const [song, setsong] = useState<Song|null>(null);
    const [loadingSong, setLoadingSong] = useState(false);
    const {logout} = useContext(AuthContext)
    useEffect(() => {
        getSong(idUser,idSong)
    }, [idUser,idSong]);

    const getSong = async(idUser:string|undefined,idsong:string)=>{
        try {
            const response = await apiSpotify.get<OneSong>(`/api/user/${idUser}/favorite_songs/${idsong}`,{
                withCredentials:true
            });
            setsong(response.data.song)
            setLoadingSong(true);
        } catch (error) {
            const err = error as AxiosError
            if(err.response?.status === 401){
                localStorage.removeItem('user');
                logout()
                window.location.href = '/';
            }
            setLoadingSong(false)
            console.log(error);
        }
    }

    return {
        song,
        loadingSong
    }

}
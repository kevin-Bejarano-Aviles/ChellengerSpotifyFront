import { useEffect, useState, useContext } from 'react';
import { AllMusicsOfSpotify, Track } from "../../interfaces/dataMusicsSpotify";
import { apiSpotify } from "../../services/apiGet/initApi";
import { UseApiDataOptions } from "../../interfaces/userApiDataOptions";
import { AxiosError } from "axios";
import { AuthContext } from '../../context';


export const useMusicsSpotify = (id:string|undefined,{initialLimit=1,initialOffset=0}:UseApiDataOptions) => {
    const [allMusicsSpotifyUser, setAllMusicsSpotifyUser] = useState<Track[]>([]);
    const [limitMusicSpotify, setLimitMusicSpotify] = useState(initialLimit);
    const [offsetMusicSpotify, setoffsetMusicSpotify] = useState(initialOffset);
    const [totalMusicSpotify, setTotalMusicSpotify] = useState(0);
    const [loadingMusicSpotify, setLoadingMusicSpotify] = useState(false);
    const {logout} = useContext(AuthContext)
    useEffect(() => {
        getAllMusicOfSpotifyUser(id,initialLimit,initialOffset)
    }, [id, initialLimit, initialOffset, offsetMusicSpotify, totalMusicSpotify]);

    
    const getAllMusicOfSpotifyUser = async(id:string|undefined,limit:number,offset:number)=>{
        
        try {
            const response = await apiSpotify.get<AllMusicsOfSpotify>(`/api/user/${id}/spotify/favorite_songs?limit=${limit}&offset=${offset}`,{
                withCredentials:true
            });
            setAllMusicsSpotifyUser(response.data.tracks);
            setTotalMusicSpotify(response.data.total);
            setLoadingMusicSpotify(true);
        } catch (error) {

            const err = error as AxiosError
            if(err.response?.status === 401){
                localStorage.removeItem('user');
                logout()
                window.location.href = '/';
            }
            setLoadingMusicSpotify(false);
            console.log(error);
        }
    }

    const updateLimit = (value:number = 1)=>{
        setLimitMusicSpotify((current)=>current + value);
    }

    const updateOffset = (value:number)=>{
        setoffsetMusicSpotify((current)=>current +value)
    }
    const resetLimit = ()=>{
        setLimitMusicSpotify(initialLimit)
    }
    return {
        allMusicsSpotifyUser,
        totalMusicSpotify,
        limitMusicSpotify,
        offsetMusicSpotify,
        loadingMusicSpotify,
        //methods
        
        resetLimit,
        updateLimit,
        updateOffset
    }
}


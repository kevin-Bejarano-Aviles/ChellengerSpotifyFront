import { DataDBOfUser, NewTrack } from "../../interfaces/dataMusicDbOfUser";
import { useState, useEffect, useContext } from 'react';
import { apiSpotify } from "../../services/apiGet/initApi";
import { UseApiDataOptions } from "../../interfaces/userApiDataOptions";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { AuthContext } from "../../context";


export const useMusicDb = (id:string|undefined,{initialLimit=5,initialOffset=0}:UseApiDataOptions,refresh?:boolean) => {
    const [allMusicDbUser, setAllMusicDbUser] = useState<NewTrack[]>([]);
    const [limitMusicDb, setLimitMusicDb] = useState(initialLimit);
    const [offsetMusicDb, setOffsetMusicDb] = useState(initialOffset);
    const [totalMusicDb, setTotalMusicDb] = useState(0);
    const [loadingMusicDb, setLoadingMusicDb] = useState<boolean>(false);

    const {logout} = useContext(AuthContext)
    
    useEffect(() => {
        getAllMusicOfUser(id,initialLimit,initialOffset)
    }, [id,limitMusicDb,offsetMusicDb,totalMusicDb]);


    const getAllMusicOfUser = async(id:string|undefined,limit:number|undefined,offset:number|undefined)=>{
        
        try {
            const response = await apiSpotify.get<DataDBOfUser>(`/api/user/${id}/favorite_songs?limit=${limit}&offset=${offset}`,{
                withCredentials:true
            });
            setAllMusicDbUser(response.data.newTracks);
            setTotalMusicDb(response.data.number);
            setLoadingMusicDb(true);
        } catch (error) {
            const err = error as AxiosError
            if(err.response?.status === 401){
                localStorage.removeItem('user');
                logout()
                window.location.href = '/';
            }
            setLoadingMusicDb(false);
            console.log(error);
            
        }
    }
    
    const updateLimit = (value:number = 1)=>{
        setLimitMusicDb((current)=>current + value);
    }

    const updateOffset = (value:number)=>{
        setOffsetMusicDb((current)=>current +value)
    }
    const resetLimit = ()=>{
        setLimitMusicDb(initialLimit)
    }
    return {
        allMusicDbUser,
        limitMusicDb,
        offsetMusicDb,
        totalMusicDb,
        loadingMusicDb,
        //methods
        resetLimit,
        getAllMusicOfUser,
        updateLimit,
        updateOffset,
    }
}


import { DataDBOfUser, NewTrack } from "../../interfaces/dataMusicDbOfUser";
import { useState, useEffect } from 'react';
import { apiSpotify } from "../../services/apiGet/initApi";
import { UseApiDataOptions } from "../../interfaces/userApiDataOptions";


export const useMusicDb = (id:string|undefined,{initialLimit=5,initialOffset=0}:UseApiDataOptions,refresh?:boolean) => {
    const [allMusicUser, setAllMusicUser] = useState<NewTrack[]>([]);
    const [limit, setLimit] = useState(initialLimit);
    const [offset, setOffset] = useState(initialOffset);
    const [total, setTotal] = useState(0);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        getAllMusicOfUser(id,initialLimit,initialOffset)
    }, [id,initialLimit,initialOffset,total]);


    const getAllMusicOfUser = async(id:string|undefined,limit:number|undefined,offset:number|undefined)=>{
        
        try {
            const response = await apiSpotify.get<DataDBOfUser>(`/api/user/${id}/favorite_songs?limit=${limit}&offset=${offset}`,{
                withCredentials:true
            });
            setAllMusicUser(response.data.newTracks)
            setTotal(response.data.number);
            setDataLoaded(true);
        } catch (error) {
            console.log(error);
            
        }
    }
    
    const updateLimit = (value:number = 1)=>{
        setLimit((current)=>current + value);
    }

    const updateOffset = (value:number)=>{
        setOffset((current)=>current +value)
    }
    const resetLimit = ()=>{
        setLimit(initialLimit)
    }
    return {
        allMusicUser,
        limit,
        offset,
        total,
        dataLoaded,
        //methods
        resetLimit,
        getAllMusicOfUser,
        updateLimit,
        updateOffset,
    }
}


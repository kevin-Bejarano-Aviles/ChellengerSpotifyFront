import { useEffect, useState } from "react";
import { AllMusicsOfSpotify, Track } from "../../interfaces/dataMusicsSpotify";
import { apiSpotify } from "../../services/apiGet/initApi";
import { UseApiDataOptions } from "../../interfaces/userApiDataOptions";


export const useMusicsSpotify = (id:string|undefined,{initialLimit=1,initialOffset=0}:UseApiDataOptions) => {
    const [allMusicsSpotifyUser, setAllMusicsSpotifyUser] = useState<Track[]>([]);
    const [limit, setLimit] = useState<number>(initialLimit);
    const [offset, setOffset] = useState<number>(initialOffset);
    const [total, setTotal] = useState<number>(0);
    const [dataLoaded, setDataLoaded] = useState(false);
    useEffect(() => {
        getAllMusicOfSpotifyUser(id,limit,offset)
    }, [id, limit, offset, total]);

    
    const getAllMusicOfSpotifyUser = async(id:string|undefined,limit:number,offset:number)=>{
        
        try {
            const response = await apiSpotify.get<AllMusicsOfSpotify>(`/api/user/${id}/spotify/favorite_songs?limit=${limit}&offset=${offset}`,{
                withCredentials:true
            });
            setAllMusicsSpotifyUser(response.data.tracks);
            setTotal(response.data.total);
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
        allMusicsSpotifyUser,
        total,
        limit,
        offset,
        dataLoaded,
        //methods
        
        resetLimit,
        updateLimit,
        updateOffset
    }
}


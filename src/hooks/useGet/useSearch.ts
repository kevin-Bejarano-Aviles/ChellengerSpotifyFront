import { useEffect, useState } from "react";
import { apiSpotify } from "../../services/apiGet/initApi";
import { ResponseSearchTrack, Track } from "../../interfaces/dataSearch";


export const useSearch = (id:string|undefined,initialQuery:string) => {

    const [resultSearch, setResultSearch] = useState<Track[]>([]);
    const [total, setTotal] = useState<number>(0);



    useEffect(() => {
        getTrackBySearch(id,initialQuery)
    }, [id,initialQuery]);


    const getTrackBySearch = async(id:string|undefined,query:string)=>{
        try {
            
            
            const response = await apiSpotify.get<ResponseSearchTrack>(`/api/user/${id}/search?q=${query}`,{
                withCredentials:true
            });
            setResultSearch(response.data.tracks);
            setTotal(response.data.total);    
            console.log({resultSearch});
            console.log({initialQuery});
            
        } catch (error) {
            console.log(error);
            
        }
    }


    return {
        resultSearch,
        total
    }
}
//al usuarlo tendras que hacer un state y un hadle para el cabio del imput

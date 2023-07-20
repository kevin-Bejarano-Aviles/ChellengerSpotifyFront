import { useEffect, useState, useContext } from 'react';
import { apiSpotify } from "../../services/apiGet/initApi";
import { ResponseSearchTrack, Track } from "../../interfaces/dataSearch";
import { AxiosError } from "axios";
import { AuthContext} from '../../context';




export const useSearch = (id:string|undefined,initialQuery:string) => {
    const {logout} = useContext(AuthContext)
    const [resultSearch, setResultSearch] = useState<Track[]>([]);
    const [totalSearch, setTotalSearch] = useState(0);
    const [loadingSearch, setLoadingSearch] = useState(false);



    useEffect(() => {
        getTrackBySearch(id,initialQuery)
    }, [id,initialQuery]);


    const getTrackBySearch = async(id:string|undefined,query:string)=>{
        try {
            
            
            const response = await apiSpotify.get<ResponseSearchTrack>(`/api/user/${id}/search?q=${query}`,{
                withCredentials:true
            });
            setResultSearch(response.data.tracks);
            setTotalSearch(response.data.total);
            setLoadingSearch(true);
            // console.log({resultSearch});
            // console.log({initialQuery});
            
        } catch (error) {
            const err = error as AxiosError
            if(err.response?.status === 401){
                localStorage.removeItem('user');
                logout()
                window.location.href = '/';
            }
            setLoadingSearch(false);
            console.log(error);
            
        }
    }


    return {
        resultSearch,
        totalSearch,
        loadingSearch,
    }
}
//al usuarlo tendras que hacer un state y un hadle para el cabio del imput

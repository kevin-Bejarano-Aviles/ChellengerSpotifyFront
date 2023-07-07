import { useEffect, useState } from "react";
import { DataUserProfile, User } from "../../interfaces/dataUserProfile";
import { apiSpotify } from "../../services/apiGet/initApi";


export const useProfile = (id:string|undefined) => {
    const [user, setUser] = useState<User|null>(null);

    useEffect(()=>{
        getUser(id)
    },[id]);

    const getUser = async(id:string|undefined)=>{
        try {
            const response = await apiSpotify.get<DataUserProfile>(`/api/user/${id}`,{
                withCredentials:true
            });
            setUser(response.data.user)
        } catch (error) {
            console.log(error);
        }
    }

    return {
        user
    }
}



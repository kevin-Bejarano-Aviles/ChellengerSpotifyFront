import { useEffect, useState, useContext } from 'react';
import { DataUserProfile, User } from "../../interfaces/dataUserProfile";
import { apiSpotify } from "../../services/apiGet/initApi";
import { AxiosError } from "axios";
import { AuthContext } from '../../context';


export const useProfile =  (id:string) => {
    const [user, setUser] = useState<User|null>(null);
    const [loadingProfile, setLoadingProfile] = useState(false);
    const {logout} = useContext(AuthContext)
    useEffect(()=>{
        getUser(id)
    },[id]);

    const getUser = async(id:string)=>{
        try {
            const response = await apiSpotify.get<DataUserProfile>(`/api/user/${id}`,{
                withCredentials:true
            });
            setUser(response.data.user)
            setLoadingProfile(true);
        } catch (error) {

            const err = error as AxiosError
            if(err.response?.status === 401){
                localStorage.removeItem('user');
                logout()
                window.location.href = '/';
            }
            setLoadingProfile(false);
            console.log(error);
        }
    }

    return {
        loadingProfile,
        user
    }
}



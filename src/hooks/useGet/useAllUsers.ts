import { useEffect, useState, useContext } from 'react';
import { AllUsers, Users } from "../../interfaces/dataAllUsers";
import { apiSpotify } from "../../services/apiGet/initApi";
import { AxiosError } from "axios";
import { AuthContext } from '../../context';


export const useAllUsers = () => {
    const {logout} = useContext(AuthContext)
    const [allUsers, setAllUsers] = useState<Users[]>([]);
    const [cantUsers, setCantUsers] = useState<number>(0);
    const [loadingUsers, setLoadingUsers] = useState<boolean>(false);
    useEffect(() => {
        getAllUsers()
    }, [allUsers.length,cantUsers]);


    const getAllUsers = async()=>{
        try {
            const response = await apiSpotify.get<AllUsers>('/api/user',{
                withCredentials:true,
                headers:{
                    
                }
            });
            setAllUsers(response.data.users);
            setCantUsers(response.data.length);
            setLoadingUsers(true);
        } catch (error) {
            const err = error as AxiosError
            if(err.response?.status === 401){
                localStorage.removeItem('user');
                logout()
                window.location.href = '/';
            }
            setLoadingUsers(false);
            console.log(error);
            
        }
    }

    return {
        allUsers,
        cantUsers,
        loadingUsers
    }
}



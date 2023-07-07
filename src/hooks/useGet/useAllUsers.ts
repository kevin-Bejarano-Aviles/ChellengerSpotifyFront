import { useEffect, useState } from "react";
import { AllUsers, Users } from "../../interfaces/dataAllUsers";
import { apiSpotify } from "../../services/apiGet/initApi";


export const useAllUsers = () => {
    const [allUsers, setAllUsers] = useState<Users[]>([]);
    const [cantUsers, setCantUsers] = useState<number>(0);

    useEffect(() => {
        getAllUsers()
    }, [allUsers.length]);


    const getAllUsers = async()=>{
        try {
            const response = await apiSpotify.get<AllUsers>('/api/user',{
                withCredentials:true
            });
            setAllUsers(response.data.users)
            setCantUsers(response.data.length);
        } catch (error) {
            console.log(error);
            
        }
    }

    return {
        allUsers,
        cantUsers
    }
}



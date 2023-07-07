import axios from "axios";


export const apiSpotify = axios.create({
    baseURL:'http://localhost:8000'

})
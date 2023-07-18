import { Navigate } from "react-router-dom";
import { 
    Home,
    Profile,
    Search,
    MusicFromDb,
    MusicFromSpotify 
} from "../pages";


export const childSpotifyRoutes =  [
    {
        path:'/',element:<Home/>
    },
    {
        path:'profile/:id',element:<Profile/>
    },
    {
        path:'search',element:<Search/>
    },
    {
        path:'user/:id/music/db',element:<MusicFromDb/>
    },
    {
        path:'user/:id/music/spotify',element:<MusicFromSpotify/>
    },
    {
        path:'/*',
        element:<Navigate to={'/'}/>
    }
]



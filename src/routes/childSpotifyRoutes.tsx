import { Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { MusicFromDb } from "../pages/MusicFromDb";
import { MusicFromSpotify } from "../pages/MusicFromSpotify";
import { Profile } from "../pages/Profile";
import { Search } from "../pages/Search";


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



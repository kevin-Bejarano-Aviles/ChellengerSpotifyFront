import { Home } from "../home/pages/Home";
import { MusicFromDb } from "../musicDB&Spotify/pages/MusicFromDb";
import { MusicFromSpotify } from "../musicDB&Spotify/pages/MusicFromSpotify";
import { Profile } from "../profile/pages/Profile";
import { Search } from "../search/pages/Search";


export const childSpotifyRoutes = () => [
    {
        path:'home',element:<Home/>
    },
    {
        path:'profile/:id',element:<Profile/>
    },
    {
        path:'search',element:<Search/>
    },
    {
        path:'musicDb',element:<MusicFromDb/>
    },
    {
        path:'musicSpotify',element:<MusicFromSpotify/>
    }
]



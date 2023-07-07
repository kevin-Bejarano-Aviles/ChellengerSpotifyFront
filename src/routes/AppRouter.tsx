import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "../home/pages/Home";
import { Profile } from "../profile/pages/Profile";
import { MusicFromSpotify } from "../musicDB&Spotify/pages/MusicFromSpotify";
import { MusicFromDb } from "../musicDB&Spotify/pages/MusicFromDb";
import { Search } from "../search/pages/Search";
/* import { PrivateRoutes } from "./PrivateRoutes";


export const AppRouter = ()=>{
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/" element={
                    <PrivateRoutes>
                        <Routes>
                            <Route path='profile/:id' element={<Profile/>}/>
                            <Route path='user/:id/music/spotify' element={<MusicFromSpotify/>}/>
                            <Route path='user/:id/music/db' element={<MusicFromDb/>}/>
                            <Route path='search' element={<Search/>}/>
                        </Routes>
                    </PrivateRoutes>
                }

                />
            </Routes>
            
        </>
    )
}


 */
const routesConfig = createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'profile/:id',
        element:<Profile/>
    },
    {
        path:'user/:id/music/spotify',
        element:<MusicFromSpotify/>
    },
    {
        path:'user/:id/music/db',
        element:<MusicFromDb/>
    },
    {
        path:'search',
        element:<Search/>
    }
]);
export const AppRouter = () => {
    return <RouterProvider router={routesConfig}/>;
}
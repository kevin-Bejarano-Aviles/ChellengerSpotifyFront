import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PrivateRoutes} from "./PrivateRoutes";
import { HomeNotLogged , ErrorPage} from "../pages";
import { PublicRoutes } from "./PublicRoutes";
import { RoutesLogged } from "./RoutesLogged";
import { childSpotifyRoutes } from "./childSpotifyRoutes";

const routesConfig = createBrowserRouter([
    {
        path:'home/',
        element:(
            <PublicRoutes>
                <HomeNotLogged/>
            </PublicRoutes>
        ),
        errorElement:<ErrorPage/>
    },
    {
        path:'/',
        element:(
            <PrivateRoutes>
                <RoutesLogged/>
            </PrivateRoutes>
        ),
        children: childSpotifyRoutes
    },
]);
export const AppRouter = () => {
    return <RouterProvider router={routesConfig}/>;
}
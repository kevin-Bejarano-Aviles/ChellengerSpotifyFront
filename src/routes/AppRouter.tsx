import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { RoutesLogged } from "./RoutesLogged";
import { childSpotifyRoutes } from "./childSpotifyRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { HomeNotLogged } from "../pages/HomeNotLogged";
import { ErrorPage } from "../pages/ErrorPage";

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
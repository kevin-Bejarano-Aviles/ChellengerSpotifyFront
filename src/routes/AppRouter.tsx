import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PrivateRoutes,PublicRoutes,RoutesLogged,childSpotifyRoutes } from "./";
import { HomeNotLogged , ErrorPage} from "../pages";

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
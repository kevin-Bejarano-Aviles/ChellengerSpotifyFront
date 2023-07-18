import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header"
import { NavBar } from "../components/navBar/NavBar"


export const RoutesLogged = () => {
    return (
        <>
        <div className="columns is-fullheight is-desktop homePage m-0 thepage has-background-black">
          <NavBar/>
          <div className="is-flex is-flex-direction-column column is-three-quarters">
            <Header/>
            <Outlet/>
          </div>
        </div>
        </>
    )
}



import { Header } from "../components/Header/Header"
import { NavBar } from "../components/navBar/NavBar"
import { InfoNotLogged } from "../components/InfoNotLogged"


export const HomeNotLogged = () => {
    return (
        <>
            <div className="columns is-fullheight is-desktop homePage m-0 thepage has-background-black">
                <NavBar/>
                <div className="is-flex is-flex-direction-column column is-three-quarters">
                    <Header/>   
                    <InfoNotLogged/>
                </div>
            </div>
        </>
    )
}


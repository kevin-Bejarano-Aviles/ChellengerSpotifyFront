import { NavBar } from "../../components/navBar/NavBar";
import { PrincipalView } from "../components/PrincipalView";


export const Home = () => {
  return (
    <>
        <div className="columns is-fullheight is-desktop homePage m-0 thepage has-background-black">
          <NavBar/>
          <PrincipalView/>
        </div>
    </>
  )
}



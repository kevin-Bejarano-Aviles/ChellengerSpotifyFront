import { useParams } from "react-router-dom"
import { RouteParams } from "../../interfaces/RoutesParams"
import { NavBar } from "../../components/navBar/NavBar"
import { ComponentProfile } from "../components/ComponentProfile"



export const Profile = () => {
  const {id} = useParams<RouteParams>()
  

  

  return (
    <>
      <div className="columns is-fullheight is-desktop homePage m-0 thepage has-background-black">
          <NavBar/>
          <ComponentProfile id={id}/>
      </div>
    </>
  )
}

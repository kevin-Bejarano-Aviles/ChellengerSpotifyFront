import { NavBar } from "../../components/navBar/NavBar"
import { ViewDbTracks } from "../components/ViewDbTracks"


export const MusicFromDb = () => {
  return(
    <>
        <div className="columns is-fullheight is-desktop homePage m-0 thepage has-background-black">
          <NavBar/>
          <ViewDbTracks/>
        </div>
    </>
  )
}


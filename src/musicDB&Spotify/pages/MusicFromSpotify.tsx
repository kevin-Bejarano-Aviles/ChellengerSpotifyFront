
// import { useNavigate } from "react-router-dom"
import { NavBar } from "../../components/navBar/NavBar"
import { ViewSpotifyTracks } from "../components/ViewSpotifyTracks"


export const MusicFromSpotify = () => {
  return (
      <>
        <div className="columns is-fullheight is-desktop homePage m-0 thepage has-background-black">
          <NavBar/>
          <ViewSpotifyTracks/>
        </div>
      </>
  )
}


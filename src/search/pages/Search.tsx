import { NavBar } from "../../components/navBar/NavBar"
import { SearchComponent } from "../components/SearchComponent"


export const Search = () => {
    return (
      <>
        <div className="columns is-fullheight is-desktop homePage m-0 thepage has-background-black">
          <NavBar/>
          <SearchComponent/>
        </div>
      </>
    )
}



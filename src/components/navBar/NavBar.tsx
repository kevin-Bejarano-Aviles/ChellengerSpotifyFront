import { NavLink } from "react-router-dom"
import { NavEnd } from "./NavEnd"


export const NavBar = () => {
    return (
    <>  
        <nav className="column is-desktop is-flex is-flex-direction-column has-background-black elnav">
            <aside className="menu">
                <ul className="menu-list m-2">
                    <li>
                        <NavLink
                            to='/'
                            className={({isActive})=> `${isActive ? 'is-active':''}`}>
                                <span className="icon fas fa-lg">
                                    <i className="fa-solid fa-house"></i>    
                                </span>
                                <span className="ml-4 has-text-weight-bold is-size-5">Inicio</span>
                        </NavLink> 
                    </li>
                    <li>
                        <NavLink
                            className={({isActive})=> `${isActive ? 'is-active':''}`}
                            to='/search'>   
                                <span className="icon fas fa-lg">
                                    <i className="fa-solid fa-magnifying-glass "></i>
                                </span>
                                <span className="ml-4 has-text-weight-bold is-size-5">Search</span>
                        </NavLink> 
                    </li>
                </ul>
            </aside>
            <aside className="menu ml-3">
                <ul className="menu-list m-2">
                    <li>
                        <span className="icon fas fa-lg">
                            <i className="fas fa-compact-disc"></i>
                        </span>
                        <span className="mx-4 has-text-weight-bold is-size-5">Tu biblioteca</span>
                        <span className="icon fas fa-lg">
                            <i className="fa-sharp fa-solid fa-plus"></i>
                        </span >
                    </li>
                </ul>
            </aside>
            <NavEnd/>
        </nav>
        
    </>
  )
}


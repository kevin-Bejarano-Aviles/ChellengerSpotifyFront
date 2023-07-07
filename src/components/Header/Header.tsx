import { AuthContext } from "../../context/AuthContex";
import { greetingHours } from "../../helpers/GreetingHours"
import { useContext } from 'react';
import { HeaderRithtLogged } from "./HeaderRithtLogged";
import { HeaderRightNotLogged } from "./HeaderRightNotLogged";


export const Header = () => {
    const {logged,user} = useContext(AuthContext)
    const hora = greetingHours();
    return (
        <>
            <header className="level has-background-black py-5 pr-6 mb-0 ">
                <div className="level-left is-flex is-flex-direction-column ml-3">
                    <div className="mb-3 ml-0">
                        <span className="icon fas fa-lg has-text-white">
                            <i className="fa-solid fa-chevron-left"></i>
                        </span>
                        <span className="icon fas fa-lg has-text-white">
                            <i className="fa-solid fa-chevron-right"></i>
                        </span>
                    </div>
                    <div >
                        <span className="has-text-weight-bold has-text-white">{hora}</span>
                    </div>
                </div>
                <div className="level-right pb-5">
                    {
                        (user && logged)
                        ? <HeaderRithtLogged id={user.id}/>
                        : <HeaderRightNotLogged/>
                    }
                </div>
            </header>
        </>
    )
}


import { Header } from "../../components/Header/Header"
import { InputSearch } from "./InputSearch"


export const SearchComponent = () => {
    return (
        <>
            <div className="column is-three-quarters">
                <div className="is-flex is-flex-direction-column">
                    <Header/>
                    <InputSearch/>
                </div>
            </div>
        </>
    )
}



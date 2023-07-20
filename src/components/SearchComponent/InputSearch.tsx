import { useLocation, useNavigate } from "react-router-dom"
import queryString,{ParsedQuery} from "query-string"
import { useSearch } from "../../hooks/useGet/useSearch"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContex"
import { useForm } from "../../hooks/useForm"
import { CardHeroSearch } from "../CardList/CardSearch/CardHeroSearch"
type FormEvent = React.FormEvent<HTMLFormElement>;
interface MyQuery extends ParsedQuery {
    q:string
}
export const InputSearch = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const query:MyQuery = queryString.parse(location.search) as MyQuery
    const {q=''} = query;
    const {searchText,onChange} = useForm({
        searchText:q
    });
    
    
    
    const onSearchSumbit = (event:FormEvent)=>{
        event.preventDefault();
        navigate(`?q=${searchText}`)
    }
    // if(searchText.length<=1)return

    const {resultSearch,loadingSearch} = useSearch(user?.id,searchText);
    // const showError = (q.length>0) && (resultSearch.length===0)
    return (
        <>  
            <div className="is-flex is-justify-content-center">
                <div className="control has-icons-left has-icons-right">
                    <form onSubmit={onSearchSumbit}>
                        <input 
                            type="text" 
                            className="input is-medium"
                            placeholder="¿Que quieres escuchar?"
                            name="searchText"
                            value={searchText}
                            onChange={({target})=> onChange(target.value,'searchText')}
                        />
                        <span className="icon is-medium is-left">
                        <i className="fa-solid fa-magnifying-glass "></i>
                    </span>
                    </form>
                    
                </div>
                
            </div>
            <CardHeroSearch
                length={searchText.length}
                loading = {loadingSearch}
                results={ resultSearch }
            />
                   {/*  <div className="card m-3" style={{display:showError ? '':'none' }}>
                            <div className="card-content">
                                <div className="content has-text-centered ">
                                    No se encontraron resultados de la busqueda
                                </div>
                            </div>
                    </div> */}
                    {/* <CardSongDb
                        id={user?.id}
                        naviFunction={navitation}
                        titulo="Resultado de la busqueda"
                        tracks={resultSearch}
                    /> */}
                        
        </>
    )
}


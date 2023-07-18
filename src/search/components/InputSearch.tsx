import { useLocation, useNavigate } from "react-router-dom"
import queryString,{ParsedQuery} from "query-string"
import { useSearch } from "../../hooks/useGet/useSearch"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContex"
import { useForm } from "../hooks/useForm"
import { CardSongDb } from "../../components/Card/CardSongDb"

interface MyQuery extends ParsedQuery {
    q:string
}
export const InputSearch = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const query:MyQuery = queryString.parse(location.search) as MyQuery
    const {q=''} = query;
    const {user} = useContext(AuthContext);
    const {searchText,onChange} = useForm({
        searchText:q
    });
    const {resultSearch} = useSearch(user?.id,searchText);
    const onSearchSumbit = (event:any)=>{
        event.preventDefault();
        navigate(`q=${searchText}`)
        console.log({searchText});
    }
    const navitation = ()=>{

    }
    const showError = (q.length>0) && (resultSearch.length===0)
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

                    
                    <div className="card m-3" style={{display:showError ? '':'none' }}>
                            <div className="card-content">
                                <div className="content has-text-centered ">
                                    No se encontraron resultados de la busqueda
                                </div>
                            </div>
                    </div>
                    <CardSongDb
                        id={user?.id}
                        naviFunction={navitation}
                        titulo="Resultado de la busqueda"
                        tracks={resultSearch}
                    />
                        
        </>
    )
}


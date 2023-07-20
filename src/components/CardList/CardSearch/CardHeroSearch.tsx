import { Track } from "../../../interfaces/dataSearch"
import { Spinner } from "../../Spinner"
import { CardList } from "../CardList"
import { NotificationCard } from "../NotificationCard"


export const CardHeroSearch = ({results,loading,length}:{results:Track[],loading:boolean,length:number}) => {
    return (
        <>  
            {
                (loading)
                ?
                
                    <section className="hero">
                        <div className="hero-body is-flex is-flex-direction-column pl-0 pb-0 pt-3">
                            <div className="is-flex is-justify-content-space-between">
                                <span className="ml-2 is-size-4 has-text-weight-bold has-text-white">Resultados de la busqueda de {}</span>
                            </div>
                        {   
                            (length<2)
                            ?
                            <></>
                            :
                                ((results.length>0))
                                ?
                                    <CardList
                                        tracks= {results}
                                    />
                                :
                                    <NotificationCard
                                        content="No se encontraron resultados"
                                    />
                        }
                        </div>
                    </section>
                :
                    <Spinner/>
            }
            
        
        </>
    )
}

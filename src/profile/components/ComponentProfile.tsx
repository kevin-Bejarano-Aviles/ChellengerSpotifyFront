import { Header } from "../../components/Header/Header"
import { HeroContainer } from "../../components/Hero/HeroContainer"
import imgUser from '../../assets/spotify/images.png'
import { useProfile } from "../../hooks/useGet/useProfile"
import { TableMusicDb } from "../../components/TableMusics/TableMusicDb"
import { useMusicDb } from "../../hooks/useGet/useMusicDb"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContex"
import { useNavigate } from "react-router-dom"


export const ComponentProfile = ({id}:{id:string|undefined}) => {
    const {user:userLogged,logout} = useContext(AuthContext)
    const {user} = useProfile(id)
    const {allMusicUser,dataLoaded,limit,total,resetLimit,updateLimit} = useMusicDb(user?.id,{
        initialLimit:5,
        initialOffset:0
    });
    const navigate = useNavigate()
    const onLogOut = ()=>{
        logout()
        navigate('/')
    }
    return (
        <>
            {
                (dataLoaded)
                ?
                    <>
                    <HeroContainer
                        nameUser={`email: ${user?.email}`}
                        img={imgUser}
                        titleHero='Perfil'
                        subTitleHero={user?.user_name} 
                    />

                    {
                        (user?.id !== userLogged?.id)
                        ? <></>
                        : 
                        <div className="is-flex is-justify-content-center">
                            <button onClick={onLogOut} className="button is-dark is-rounded">Cerrar sesión</button>
                        </div>
                    }
                    
                    {
                         ( allMusicUser.length===0)
                         ?
                         <div className="card m-3">
                            <div className="card-content">
                                <div className="content has-text-centered ">
                                    No se encuentran musicas en la base de datos
                                </div>
                            </div>
                        </div>
                        :
                        <div className="is-flex is-flex-direction-column">
                       
                            <TableMusicDb
                                dataLoaded={dataLoaded}
                                musics={allMusicUser}                        
                            />
                        
                            
                        {
                                (!(limit>=total))//raro
                                ? 
                                <div className='is-flex is-justify-content-center'>
                                    <button onClick={()=>updateLimit(5)} className='button is-dark is-rounded'>Mostrar mas</button>
                                </div>
                                
                                : 
                                <div className='is-flex is-justify-content-center'>
                                    <button onClick={resetLimit} className='button is-dark is-rounded'>Mostrar 5</button>
                                </div>
                                
                        }
                        </div>
                    }
                    </>
                :
                <button className='button is-loading'>Loading</button>
            }
            
            
        </>
    )
}


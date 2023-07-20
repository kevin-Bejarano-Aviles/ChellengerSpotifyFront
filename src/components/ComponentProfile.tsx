
import { HeroContainer } from "./Hero/HeroContainer"
import imgUser from '../assets/spotify/images.png'
import { useProfile,useMusicDb } from "../hooks/useGet";
import { TableMusicDb } from "./TableMusics/TableMusicDb"

export const ComponentProfile =  ({id}:{id:string}) => {
    const {user,loadingProfile} =  useProfile(id);
    const {allMusicDbUser,loadingMusicDb,limitMusicDb,totalMusicDb,resetLimit,updateLimit} = useMusicDb(user?.id,{
        initialLimit:5,
        initialOffset:0
    });

    console.log({user,loadingProfile});

    console.log({loadingMusicDb});
    
    

    
    
    return (
        <>
            {
                (loadingMusicDb)
                ?
                    <>
                    <HeroContainer
                        nameUser={`email: ${user?.email}`}
                        img={imgUser}
                        titleHero='Perfil'
                        subTitleHero={user?.user_name} 
                    />

                   
                    
                    {
                         ( allMusicDbUser.length===0)
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
                                dataLoaded={loadingMusicDb}
                                musics={allMusicDbUser}                        
                            />
                        
                            
                        {
                                (!(limitMusicDb>=totalMusicDb))//raro
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


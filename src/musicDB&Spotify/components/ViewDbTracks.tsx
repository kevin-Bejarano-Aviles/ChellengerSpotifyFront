import { useContext } from "react"
import { AuthContext } from "../../context/AuthContex"
import { useMusicDb } from "../../hooks/useGet/useMusicDb"
import { HeroContainer } from "../../components/Hero/HeroContainer";
import { TableMusicDb } from "../../components/TableMusics/TableMusicDb";
import Buttons from "./Buttons";




export const ViewDbTracks = () => {
    const {user} = useContext(AuthContext)
    const {allMusicUser,updateLimit,limit,total,dataLoaded,resetLimit} = useMusicDb(user?.id,{
        initialLimit:5,
        initialOffset:0
    });
    console.log(allMusicUser);
    
    const spotifyImg = 'https://misc.scdn.co/liked-songs/liked-songs-640.png'
    return(
        <>
                <HeroContainer
                    img={spotifyImg}
                    titleHero="Playlist"
                    subTitleHero="Lista DB"
                    nameUser={user?.userName}
                    totalSongs={total}
                />
                <div>
                    {
                        ( allMusicUser.length===0 )
                        ?
                        <div className="card m-3">
                            <div className="card-content">
                                <div className="content has-text-centered ">
                                    No se encuentran musicas en la base de datos
                                </div>
                            </div>
                        </div>
                        :
                        <>
                            <TableMusicDb
                                dataLoaded={dataLoaded}
                                musics={allMusicUser}
                            />
                            <Buttons
                                limit={limit}
                                resetLimit={resetLimit}
                                total={total}
                                updateLimit={updateLimit} 
                            />
                        </>
                    }
                    
                </div>

        </>
    )
}


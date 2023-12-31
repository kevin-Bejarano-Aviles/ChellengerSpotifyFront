import { useContext } from "react"
import { AuthContext } from "../context"
import { useMusicDb } from "../hooks/useGet"
import { HeroContainer } from "./Hero/HeroContainer";
import { TableMusicDb } from "./TableMusics/TableMusicDb";
import Buttons from "./Buttons";




export const ViewDbTracks = () => {
    const {user} = useContext(AuthContext)
    const {allMusicDbUser,updateLimit,limitMusicDb,totalMusicDb,loadingMusicDb,resetLimit} = useMusicDb(user?.id,{
        initialLimit:5,
        initialOffset:0
    });
    // console.log(allMusicUser);
    
    const spotifyImg = 'https://misc.scdn.co/liked-songs/liked-songs-640.png'
    return(
        <>
                <HeroContainer
                    img={spotifyImg}
                    titleHero="Playlist"
                    subTitleHero="Lista DB"
                    nameUser={user?.userName}
                    totalSongs={totalMusicDb}
                />
                <div>
                    {
                        ( allMusicDbUser.length===0 )
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
                                dataLoaded={loadingMusicDb}
                                musics={allMusicDbUser}
                            />
                            <Buttons
                                limit={limitMusicDb}
                                resetLimit={resetLimit}
                                total={totalMusicDb}
                                updateLimit={updateLimit} 
                            />
                        </>
                    }
                    
                </div>

        </>
    )
}


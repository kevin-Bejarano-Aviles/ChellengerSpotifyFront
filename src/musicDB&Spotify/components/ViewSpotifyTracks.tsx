import { useMusicsSpotify } from '../../hooks/useGet/useMusicsSpotify';
import { TableMusicSpotify } from '../../components/TableMusics/TableMusicSpotify';
import { Header } from '../../components/Header/Header';
import { HeroContainer } from '../../components/Hero/HeroContainer';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContex';
// import { convertirAHora, sumDuration } from '../../helpers/MilisegToMin';


export const ViewSpotifyTracks = () => {
    const {user} = useContext(AuthContext)
    const {allMusicsSpotifyUser,updateLimit,total,dataLoaded,limit,resetLimit} = useMusicsSpotify(user?.id,{
        initialLimit:5,
        initialOffset:0
    });
    // const totalDurationMs = sumDuration(allMusicsSpotifyUser);
    // const {horas,minutosRestantes} = convertirAHora(totalDurationMs);
    const spotifyImg = 'https://misc.scdn.co/liked-songs/liked-songs-640.png';
    return (
        <>  
            {
                (dataLoaded)
                ? 
                <div className='column is-three-quarters is-flex is-flex-direction-column '>
                    <Header/>
                    <HeroContainer 
                        img={spotifyImg} 
                        titleHero='Playlist' 
                        subTitleHero='Lista Spotify'
                        nameUser={user?.userName}
                        totalSongs={total}
                        // cantHoras={`${horas}:${minutosRestantes}`}

                    />
                    
                    <div>
                        <TableMusicSpotify dataLoaded={dataLoaded} musics={allMusicsSpotifyUser}/> 
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
                </div>
                :<button className='button is-loading'>Loading</button>
            }
            
            
        </>
    )
}


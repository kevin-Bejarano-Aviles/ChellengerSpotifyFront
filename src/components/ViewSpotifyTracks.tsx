import { useMusicsSpotify } from '../hooks/useGet';
import { TableMusicSpotify } from './TableMusics/TableMusicSpotify';
import { HeroContainer } from './Hero/HeroContainer';
import { useContext } from 'react';
import { AuthContext } from '../context';
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
        </>
    )
}

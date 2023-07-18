import { useNavigate } from "react-router-dom";
import { CardSong } from "../../components/Card/CardSong";
import { GoshtCard } from "../../components/Card/GoshtCard";
import { data } from "../../data/dataFake";
import { useAllUsers } from "../../hooks/useGet/useAllUsers";
import { useMusicDb } from "../../hooks/useGet/useMusicDb";
import { useMusicsSpotify } from "../../hooks/useGet/useMusicsSpotify"
import { CardSongDb } from "../../components/Card/CardSongDb";

export const ViewInfoLogged = ({id}:{id:string|undefined}) => {
    const navigate = useNavigate();


    const {allMusicsSpotifyUser} = useMusicsSpotify(id,{
        initialLimit:5,
        initialOffset:0
    });
    const {allMusicUser} = useMusicDb(id,{
        initialLimit:5,
        initialOffset:0
    });
    const {allUsers} = useAllUsers();

    const quitarte = (id:string|undefined)=>{
        const newUsers = allUsers.filter(user => user.id!==id)
        return newUsers
    }
    const newUsers = quitarte(id);

    const fakeData = data ;

    const pageMusicSpotify = ()=>{
        navigate(`user/${id}/music/spotify`)
    }
    const pageMusicDb = ()=>{
        navigate(`user/${id}/music/db`)
    }
    return (
        <>  
            <CardSong naviFunction={pageMusicSpotify} titulo="Musica Spotify" tracks={allMusicsSpotifyUser}/>
            <CardSongDb naviFunction={pageMusicDb} titulo="Musica en Bd" tracks={allMusicUser}/>
            <GoshtCard users={newUsers} content={fakeData} titulo="Users" />
        </>
       )
}

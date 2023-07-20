import { CardHeroMusicDb } from "./CardList/CardMusicDb/CardHeroMusicDb";
import { CardHeroMusicSpotify } from "./CardList/CardMusicSpotify/CardHeroMusicSpotify";
import { CardHeroUser } from "./CardList/CardUser/CardHeroUser";

export const ViewInfoLogged = ({id}:{id:string|undefined}) => {

    return (
        <>  
            <CardHeroMusicSpotify id={id}/>
            <CardHeroMusicDb id={id}/>
            <CardHeroUser/>
        </>
       )
}

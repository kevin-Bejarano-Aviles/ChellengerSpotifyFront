import { Track } from "../../interfaces/dataMusicsSpotify"
import { TableItemSpotify } from "./musicSpotify/TableItemSpotify"



export const TableMusicSpotify = ({musics,dataLoaded}:{musics:Track[],dataLoaded:boolean}) => {
    
    
    return(
        <>
            <table className="table is-fullwidth is-narrow">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Titulo</th>
                        <th>Album</th>
                        <th>URL Song</th>
                        <th>Estado</th>
                        <th><span><i className="fa-regular fa-clock"></i></span></th>
                    </tr>
                </thead>
                <tbody>
                    
                        {
                            dataLoaded && musics.map((music,i)=>(
                                <TableItemSpotify
                                    key={music.id}
                                    iterador={i+1}
                                    {...music}
                                />
                            )
                        )}
                </tbody>
            </table>
        </>
    )
}


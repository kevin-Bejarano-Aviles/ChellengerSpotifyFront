import { NewTrack } from "../../interfaces/dataMusicDbOfUser"
import { TableItemDb } from "./musicdb/TableItemDb"



export const TableMusicDb = ({musics,dataLoaded}:{musics:NewTrack[],dataLoaded:boolean}) => {
    
    
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
                                <TableItemDb
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


import { useParams } from "react-router-dom"
import { RouteParams } from "../interfaces/RoutesParams"
import { ComponentProfile } from "../components/ComponentProfile"



export const Profile = () => {
    const {id} = useParams<RouteParams>()
    console.log(id);
    
    return (
    <>
        <ComponentProfile id={id!}/>
    </>
  )
}

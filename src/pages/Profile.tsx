import { useParams } from "react-router-dom"
import { RouteParams } from "../interfaces/RoutesParams"
import { ComponentProfile } from "../profile/components/ComponentProfile"



export const Profile = () => {
    const {id} = useParams<RouteParams>()
    return (
    <>
        <ComponentProfile id={id}/>
    </>
  )
}

import { GoshtCard } from "../../components/Card/GoshtCard"
import { data } from "../../data/dataFake"



export const InfoNotLogged = () => {
    const fakeData = data;
    return (
        <>
            <GoshtCard content={fakeData} titulo="User not logged" />
            <GoshtCard content={fakeData} titulo="User not logged" />
        </>
   )
}


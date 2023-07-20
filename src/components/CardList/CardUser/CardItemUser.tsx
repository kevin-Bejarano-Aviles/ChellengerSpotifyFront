import { Link } from "react-router-dom"
import imgFake from '../../../assets/spotify/images.png';
import { Spinner } from "../../Spinner";

export const CardItemUser = ({id,user_name,loading}:{id:string,user_name:string,loading:boolean}) => {
    return (
        <>
            {
                (loading)
                ? 
                    <div className="card has-background-grey-dark m-3">
                        <Link to={`profile/${id}`}>
                            <div className="card-image">
                                <figure className="m-3 image is-213x213">
                                    <img src={imgFake} alt={`img ${user_name}`} />
                                </figure>
                            </div>
                            <div className="has-text-white">
                                <div className="has-text-centered mb-2">
                                    <span className="has-text-weight-bold">{user_name}</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                :
                    <Spinner/>
            }
            
        </>
    )
}


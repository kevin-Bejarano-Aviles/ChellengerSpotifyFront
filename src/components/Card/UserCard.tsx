import { Link } from "react-router-dom"


export const UserCard =({image,title,userId}:{image:string,title:string,userId:string}) => {
    return (
        <>
            <div className="card has-background-grey-dark m-3">
            <Link to={`/profile/${userId}`}>
                <div className="card-image">
                    <figure className="mb-0 m-3 image is-213x213">
                        <img src={image} alt={`${title} img`} />
                    </figure>
                </div>
                <div className="has-text-white ">
                    <div className="has-text-centered mb-2">
                        <span className="has-text-weight-bold">{title}</span>
                    </div>
                </div>
                
            </Link>
                
            </div>
        </>
    )
}


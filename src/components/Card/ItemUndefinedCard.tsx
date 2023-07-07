

export const ItemUndefinedCard = ({image,title}:{image:string,title:string}) => {
    return (
        <>
            <div className="card has-background-grey-dark m-3">
                <div className="card-image">
                    <figure className="  image is-213x213">
                        <img src={image} alt={`${title} img`} />
                    </figure>
                </div>
                <div className="card-footer">
                    <div className="has-text-white ">
                        <p className="card-footer-item">
                            <span className="has-text-weight-bold has-text-left">{title}</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

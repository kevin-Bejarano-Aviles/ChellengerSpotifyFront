interface propsHero {
    titleHero:string,
    subTitleHero:string|undefined,
    img:string,
    nameUser:string | undefined,
    totalSongs?:number
}

export const HeroContainer:React.FC<propsHero> = ({
    img,
    subTitleHero,
    titleHero,
    nameUser,
    totalSongs
}) => {
    return(
        <>
            <section className="hero is-medium has-text-white ">
                <div className="hero-body is-flex pl-5 py-6">
                    <div>
                        <figure className="image is-213x213">
                            <img src={img} alt="imgAlbum" />
                        </figure>
                    </div>
                    <div className="is-flex is-flex-direction-column">
                        <div className="m-2 has-text-weight-bold">
                            <span>{titleHero}</span>
                        </div>
                        <div className="m-2 is-size-1 has-text-weight-bold">
                            <span>{subTitleHero}</span>
                        </div>
                        <div className="m-2 ">
                            <span className="has-text-weight-bold mr-3">{nameUser}</span>
                            {
                                (totalSongs)
                                ?
                                <>
                                    <span>total canciones: {totalSongs}</span>
                                </>
                                : <></>
                            }   
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


import {data} from '../../../data/dataFake'
import imgfake from '../../../assets/spotify/images.png'
export const CardListDefault = () => {

    const dataFake = data;
    return (
        <>
            <div className="is-flex is-justify-content-flex-start is-flex-wrap-wrap">
                {
                    dataFake.map(fake => (
                        <div key={fake.id} className="card has-background-grey-dark m-3">
                            <div className="card-image">
                                <figure className="m-3 image is-213x213">
                                    <img src={imgfake} alt={`img ${fake.title}`} />
                                </figure>
                            </div>
                            <div className="has-text-white">
                                <div className="has-text-centered mb-2">
                                    <span className="has-text-weight-bold">{fake.title}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

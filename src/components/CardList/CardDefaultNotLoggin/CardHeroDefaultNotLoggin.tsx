import { CardListDefault } from "./CardListDefault"


export const CardHeroDefaultNotLoggin = () => {
    return (
        <>
            <section className="hero">
                        <div className="hero-body is-flex is-flex-direction-column pl-0 pb-0 pt-3">
                            <div className="is-flex is-justify-content-space-between">
                                <span className="ml-2 is-size-4 has-text-weight-bold has-text-white">User not logged</span>
                            </div>
                            <CardListDefault/>
                        </div>
                    </section>
        </>
    )
}


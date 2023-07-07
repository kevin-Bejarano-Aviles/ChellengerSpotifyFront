

export const NotLibrary = () => {
    return (
        <>
            <div className="ml-4 mt-5">
                <div className="p-2 card cardnotlogged is-flex is-flex-direction-column my-3">
                    <span className="mb-1 is-size-6 has-text-white  has-text-weight-bold">Crea tu primera playlist</span>
                    <span className="mb-1 is-size-6 has-text-white">¡Es muy fácil! Te vamos a ayudar</span>
                    <button className="my-2 button is-rounded is-small is-responsive is-align-self-center has-text-weight-bold">Crear playlist</button>
                </div>
                <div className="p-2 card cardnotlogged is-flex is-flex-direction-column my-3">
                    <span className="mb-1 is-size-6 has-text-white  has-text-weight-bold">Busquemos algunos podcast para seguir</span>
                    <span className="mb-1 is-size-6 has-text-white">Te mantendremos al tanto de los nuevos episodios</span>
                    <button className="my-2 button is-rounded is-small is-responsive is-align-self-center has-text-weight-bold">Explorar podcasts</button>
                </div>
            </div>
            <div className="ml-2 tagsCustom">
                <div className="tags">
                    <span className="tag">Legal</span>
                    <span className="tag">Centro de privacidad</span>
                    <span className="tag">Politica de privacidad</span>
                    <span className="tag">Cookies</span>
                    <span className="tag">Sobre los anuncios</span>
                    <span className="tag">Accesibilidad</span>
                    <span className="tag">Cookies</span>
                </div>
                <div className="container is-bordered adicionalGlobal has-text-centered">
                    <button className="button is-rounded is-small is-responsive is-black buttoncustom ">
                    <span >
                        <i className="fa-solid fa-globe"></i>
                    </span>
                    
                    <span className="mx-3">Español de Latinoamérica</span>
                    </button>
                    
                </div>
            </div>
        </>
    )
}


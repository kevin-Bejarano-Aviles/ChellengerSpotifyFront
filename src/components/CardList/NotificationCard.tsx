

export const NotificationCard = ({content}:{content:string}) => {
    return (
        <>
            <div className="is-flex is-justify-content-center is-align-items-center my-5">
                <div className="notification is-info ">
                    {content}
                </div>
            </div>
        </>
    )
}

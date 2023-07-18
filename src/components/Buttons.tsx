

export const Buttons = ({limit,total,updateLimit,resetLimit}:{limit:number,total:number,updateLimit:(number:number)=>void,resetLimit:()=>void}) => {
    return (
        <>
            {
                (!(limit>=total))//raro
                ? 
                <div className='is-flex is-justify-content-center'>
                    <button onClick={()=>updateLimit(5)} className='button is-dark is-rounded'>Mostrar mas</button>
                </div>
                
                : 
                <div className="is-flex is-justify-content-center">
                    <button onClick={resetLimit} className='button is-dark is-rounded'>Mostrar 5</button>
                </div>
            }
        </>
        
    )
}

export default Buttons

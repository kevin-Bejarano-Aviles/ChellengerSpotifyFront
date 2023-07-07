

export const RecortarString = ({text,maxLength}:{text:string,maxLength:number}) => {
    const truncatedText = text.length > maxLength ? `${text.slice(0,maxLength)}...`:text
    const cosa = <div style={
        {
            whiteSpace:"nowrap",
            overflow:"hidden",
            textOverflow:'ellipsis',
        }
    }>
        {truncatedText}
    </div>
    return cosa
}


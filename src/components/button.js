export default function Button({OnClick,label}){
    return(
        <button onClick={onClick} className="btn">
            {label}
        </button>
    )
}
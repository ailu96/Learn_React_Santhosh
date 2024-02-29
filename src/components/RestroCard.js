
//inline styles
const StyleCard={
    backgroundColor:"skyblue",
}



const RestroCard=(props)=>{
    const {resName,cuisine,rating,delivery,imageSrc}=props.resData
    return(
        <div className="res-card" style={StyleCard}>
        <img className='res-image' alt='res-logo' src={imageSrc}></img>
        <h3>{resName}</h3>
        <h5>{cuisine}</h5>
        <h5>{rating}</h5> 
        <h5>{delivery}</h5>      
        </div>
    )
}

export default RestroCard;
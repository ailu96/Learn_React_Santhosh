import { IMAGE_URL } from "../utils/constants"

//inline styles
const StyleCard={
    backgroundColor:"#dfa888",
}
const cuisinesContainerStyle = {
    maxHeight: "100px", // Set the max height according to your requirement
    overflowY: "auto",  // Enable vertical scroll if content exceeds the height
};


const RestroCard=(props)=>{
    const {name,cuisines,avgRating,sla,cloudinaryImageId,costForTwo}=props.resData.info
    const restroLogo=`${IMAGE_URL}${cloudinaryImageId}`;
    return(
       <div className="res-card" style={StyleCard}>
        <img className='res-image' alt='res-logo' src={restroLogo}></img>
        <h3>{name}</h3>
        <div style={cuisinesContainerStyle}> {/* Container for cuisines */}
                <h5>{cuisines.join()}</h5> {/* This will allow scrolling if cuisines overflow */}
            </div>
        <h5>{costForTwo}</h5>
        <h5>{avgRating}</h5> 
        <h5>{sla.deliveryTime} Minutes</h5>  
        </div>
    )
}

export default RestroCard;
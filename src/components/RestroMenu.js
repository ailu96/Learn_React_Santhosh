import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestroMenu=()=>{
    const [resInfo,setResInfo]= useState();
    const {resId} = useParams();
    

useEffect(()=>{
        fetchMenu();
    },[]);
   
const fetchMenu= async ()=>{
    try {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${resId}&catalog_qa=undefined`);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    } catch (error) {
        console.error('Error fetching menu:', error);
    }
}



if(!resInfo){
  return  <Shimmer />
}

const {name,cuisines,costForTwoMessage,sla}=resInfo?.cards[0]?.card?.card?.info
//const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
const menuCategories=resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards
console.log(menuCategories)
return ( 
       
<div className="menu">
    <h1>{name}</h1>
    <h3>{cuisines.join(", ")}</h3>
    <h3>{costForTwoMessage} - Delivery in {sla?.deliveryTime} Minutes</h3>
    {menuCategories.map(item => {
        const itemCards = item.card.card.itemCards; // Access itemCards
        if (!itemCards) return null; // Skip rendering if itemCards is not available
        return (
            <div key={item.card.card.title}>
                <h2>{item.card.card.title}</h2>
                <ul>
                    {itemCards.map(items => (
                        <li key={items.card.info.id}>{items.card.info.name} - Rs. {items.card.info.price / 100}</li>
                    ))}
                </ul>
            </div>
        );
    })}
</div>





);
}

export default RestroMenu;
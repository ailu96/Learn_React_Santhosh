import RestroCard from "./RestroCard";
import resObject from "../utils/mockData";
import { useState } from "react";
import { useEffect } from "react";






const Body=()=>{

//State variable - Super powerful variable
const [listOfRestuarants,setlistOfResturants]=useState(
   resObject
);

//Normal JS variable
let listOfRestuarantsJS=[
    {
      "id": 1,
      "resName": "McDonald's",
      "cuisine": "Fast Food",
      "rating": "3.8",
      "delivery": "25 Mins",
      "imageSrc": "https://1000logos.net/wp-content/uploads/2017/03/McDonalds-logo.png"
    },
    {
      "id": 2,
      "resName": "Pizza Hut",
      "cuisine": "Pizza",
      "rating": "3.7",
      "delivery": "30 Mins",
      "imageSrc": "https://upload.wikimedia.org/wikipedia/sco/thumb/d/d2/Pizza_Hut_logo.svg/1088px-Pizza_Hut_logo.svg.png"
    },
    {
      "id": 3,
      "resName": "Subway",
      "cuisine": "Sandwiches",
      "rating": "4.5",
      "delivery": "14 Mins",
      "imageSrc": "https://1000logos.net/wp-content/uploads/2017/06/Subway-logo.png"
    },
    {
      "id": 4,
      "resName": "Starbucks",
      "cuisine": "Coffee",
      "rating": "4.1",
      "delivery": "40 Mins",
      "imageSrc": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
    },
    {
      "id": 5,
      "resName": "KFC",
      "cuisine": "Chicken",
      "rating": "3.9",
      "delivery": "20 Mins",
      "imageSrc": "https://1000logos.net/wp-content/uploads/2017/03/KFC-Logo.png"
    },
    {
      "id": 6,
      "resName": "Burger King",
      "cuisine": "Burgers",
      "rating": "3.8",
      "delivery": "35 Mins",
      "imageSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSeNtH7fj06x_cOrcDlaA-R5cJp7LQObpR6vorV0LU3g&s"
    },
    {
      "id": 7,
      "resName": "Domino's Pizza",
      "cuisine": "Pizza",
      "rating": "3.6",
      "delivery": "28 Mins",
      "imageSrc": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dominos_pizza_logo.svg/1200px-Dominos_pizza_logo.svg.png"
    }

];
    return(
        <div>
           <div className="filter">
              <button className="filter-btn" onClick={
                ()=>{
                
                    
                    const filterList=listOfRestuarants.filter(
                        (res)=>parseFloat(res.rating)>4
                    ); 
                    setlistOfResturants(filterList)
                console.log(filterList)
                }}
              >Top Rated Resturants</button>
           </div>
            <div className='res-container'>
                {
                listOfRestuarants.map(resturant=><RestroCard key={resturant.id} resData={resturant}></RestroCard>)
            }
                
            </div>
        </div>
    )
}
export default Body;
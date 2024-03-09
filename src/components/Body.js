import RestroCard from "./RestroCard";
import resObject,{resObject2} from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Body=()=>{

//State variable - Super powerful variable
const [listOfRestuarants,setlistOfResturants]=useState( []);
const [searchText,setsearchText]= useState('');
const [filterResturants,setfilterResturants]=useState([]);
useEffect(()=>{
fetchData();
},[])


const fetchData = async () =>{
 const data =await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

const json =await data.json();

//Optional chaining
setlistOfResturants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
setfilterResturants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)

};
/*
// I don't have swiggy Api so i waited to call new restro object so i will have all data
 setTimeout(() => {
        console.log("sleeping for loading resturants");
        if(data)
            setlistOfResturants(resObject2)
            setfilterResturants(resObject2)
    }, 3000);
};
*/

// conditional rendering 
//if (listOfRestuarants.length == 0){
  //  return <Shimmer></Shimmer>
//}

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
    return listOfRestuarants.length == 0 ? <Shimmer/> :(
        <div>
           <div className="filter">
              <div className="search-div">
              <input type='text' className="search-box" value={searchText} 
              onChange={(e)=>{
                setsearchText(e.target.value);
                
             } 
            }></input>
              <button className="search-btn" 
            onClick={() => {
                const filteredList = searchText.length > 0
                    ? listOfRestuarants.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    : listOfRestuarants;
                setfilterResturants(filteredList);
            }}
>                  
                Search</button>
              </div>
             
        
              <button className="filter-btn" onClick={
                ()=>{
                    const filterList=listOfRestuarants.filter(
                        (res)=>parseFloat(res.info.avgRating)>4.1
                    ); 
                    console.log(filterList)
                    setfilterResturants(filterList)

                }}
              >Top Rated Resturants</button>
           </div>
            <div className='res-container'>
                {      
                filterResturants.map(resturant=><RestroCard key={resturant.info.id} resData={resturant}></RestroCard>)
            }
                
            </div>
        </div>
    )
}
export default Body;

import React from "react";
import ReactDOM from "react-dom/client";


/*
Header
    - Logo
    - Nav Items
Body
    - Search
    - Resturant COntainer
        - resturant cards
            -name of res
            -cuisines
            -Start Ratings
            - Delivery Time
Footer
    - CopyRight
    - Links
    - Address
    - Contacts
*/

const Header=()=>{
    return(
        <div className="header">
            <div className='logo-container'>
                <img className="logo" src="https://thumbs.dreamstime.com/b/food-delivery-logo-template-vector-icon-illustration-170869600.jpg"></img>
            </div>
            
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact US</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}; 

//inline styles
const StyleCard={
    backgroundColor:"skyblue",
}

const resObject=[
    {
      "id": 1,
      "resName": "McDonald's",
      "cuisine": "Fast Food",
      "rating": "4.0",
      "delivery": "25 Mins",
      "imageSrc": "https://1000logos.net/wp-content/uploads/2017/03/McDonalds-logo.png"
    },
    {
      "id": 2,
      "resName": "Pizza Hut",
      "cuisine": "Pizza",
      "rating": "4.2",
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
      "rating": "4.7",
      "delivery": "40 Mins",
      "imageSrc": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
    },
    {
      "id": 5,
      "resName": "KFC",
      "cuisine": "Chicken",
      "rating": "4.4",
      "delivery": "20 Mins",
      "imageSrc": "https://1000logos.net/wp-content/uploads/2017/03/KFC-Logo.png"
    },
    {
      "id": 6,
      "resName": "Burger King",
      "cuisine": "Burgers",
      "rating": "4.3",
      "delivery": "35 Mins",
      "imageSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSeNtH7fj06x_cOrcDlaA-R5cJp7LQObpR6vorV0LU3g&s"
    },
    {
      "id": 7,
      "resName": "Domino's Pizza",
      "cuisine": "Pizza",
      "rating": "4.6",
      "delivery": "28 Mins",
      "imageSrc": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dominos_pizza_logo.svg/1200px-Dominos_pizza_logo.svg.png"
    }
]

  
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
const Body=()=>{
    return(
        <div>
            <div className="Search">Search</div>
            <div className='res-container'>
                {
                resObject.map(resturant=><RestroCard key={resturant.id} resData={resturant}></RestroCard>)
            }
                
            </div>
        </div>
    )
}
const AppLayout = () =>{
    return (
        <div className='app'>
           <Header/>
            <Body/>
        </div>
    );
}

const root=ReactDOM.createRoot(document.getElementById('root'));

// Cmponent Composition : having component inside component is component composition here we have title iside headingComponent
root.render(<AppLayout/>);



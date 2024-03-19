import {LOGO_URL} from '../utils/constants'; //Named Exports
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
const Header=()=>{

    let btnName="Login";
    const [btnNameReact,setbtnNameReact]= useState("Login")


   //if no dependency array => useEffect is called on every render
   // if dependency array is empty => useEffect is called only on intial render(just once)
   // if dependency array is [btnNameReact] => useEffect is called everytime btnNameReact is updated 
   useEffect(()=>{
   console.log('useEffect is called')
   },[])

   const onlineStatus=useOnlineStatus();

    return(
        <div className="header">
            <div className='logo-container'>
                <img className="logo" src={LOGO_URL}></img>
            </div>
            
            <div className='nav-items'>
                <ul>
                    <li>onlineStatus:{onlineStatus ?"✅":"🛑"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/contact">Contact US</Link></li>
                    <li><Link to="/Grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button className='login-btn' 
                    onClick={()=>
                    {
                         (btnNameReact == 'Login'?setbtnNameReact("Logout"):setbtnNameReact("Login"))
                }
                    }>{btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    );
}; 

export default Header;
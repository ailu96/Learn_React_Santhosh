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
        <div className="flex justify-between bg-orange-300 shadow-lg mb-2">
            <div className='logo-container'>
            
                <img className="w-28" src={LOGO_URL}></img>
            </div>
            
            <div className='flex items-center'>
                <ul className="flex p-4 m-4">
                    <li className='px-4'>onlineStatus:{onlineStatus ?"✅":"🛑"}</li>
                    <li className='px-4'><Link to="/">Home</Link></li>
                    <li className='px-4'><Link to="/About">About</Link></li>
                    <li className='px-4'><Link to="/contact">Contact US</Link></li>
                    <li className='px-4'><Link to="/Grocery">Grocery</Link></li>
                    <li className='px-4'>Cart</li>
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
import {LOGO_URL} from '../utils/constants'; //Named Exports
import { useState,useEffect } from 'react';

const Header=()=>{

    let btnName="Login";
    const [btnNameReact,setbtnNameReact]= useState("Login")
    return(
        <div className="header">
            <div className='logo-container'>
                <img className="logo" src={LOGO_URL}></img>
            </div>
            
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact US</li>
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
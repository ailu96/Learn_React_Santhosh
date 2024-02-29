
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; 
import Body from "./components/Body";


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



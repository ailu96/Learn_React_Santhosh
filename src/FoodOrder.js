
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; 
import Body from "./components/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestroMenu from "./components/RestroMenu";

const AppLayout = () =>{
    return (
        <div className='app'>
           <Header/>
           <Outlet />
        </div>
    );
}

const appRouter= createBrowserRouter(
    [
    {

        path:"/",
        element:<AppLayout></AppLayout>,
        children:[
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/About",
                element:<About />
            },
            {
                path:"/Contact",
                element:<Contact/>
            },
            {
                path:"/restaurants/:resId",
                element:<RestroMenu />
            },
        ],
        errorElement:<Error></Error>
    },

])
const root=ReactDOM.createRoot(document.getElementById('root'));

// Cmponent Composition : having component inside component is component composition here we have title iside headingComponent
root.render(<RouterProvider router={appRouter}/>);



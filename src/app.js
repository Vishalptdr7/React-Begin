import React from "react";
import ReactDOM from "react-dom/client";
import  Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
const root=ReactDOM.createRoot(document.getElementById("js"));
import { About } from "./components/About";
import Contact from "./components/Contact";

import RestaurantMenu from "./components/RestaurantMenu";
const AppLayout=()=>{
  return (
    <div className="app">
     <Header />
     <Outlet/>
     <Footer />
    </div>
  )
}
const appRouter=createBrowserRouter([{
  path:"/",
  element:<AppLayout />,
  children:[
    {
      path:"/",
      element:<Body />
    },
    {
      path:"/about",
      element:<About />
    },
    {
      path:"/contact",
      element:<Contact />
    },
   {
    path:"/restaurant/:resId",
    element:<RestaurantMenu/>
   }
  ]
},


])
root.render(<RouterProvider router={appRouter}/>);







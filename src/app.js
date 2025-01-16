import React ,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import  Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
const root=ReactDOM.createRoot(document.getElementById("js"));
import { About } from "./components/About";
import Contact from "./components/Contact";

import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
const Grocery=lazy(()=>import("./components/Grocery"))
const AppLayout=()=>{
  return (
    <div className="app">
     <Header />
     <Outlet/>
     <Footer />
    </div>
  )
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<h1>Loading .....</h1>}>
            <Body />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading .....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading .....</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading .....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: (
          <Suspense fallback={<h1>Loading .....</h1>}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
    ],
  },
]);
root.render(<RouterProvider router={appRouter}/>);







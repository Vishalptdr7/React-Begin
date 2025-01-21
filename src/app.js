// import React ,{lazy,Suspense} from "react";
// import ReactDOM from "react-dom/client";
// import  Header from "./components/Header";
// import Footer from "./components/Footer";
// import Body from "./components/Body";
// import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// const root=ReactDOM.createRoot(document.getElementById("js"));
// import { About } from "./components/About";
// import Contact from "./components/Contact";
// import Cart from "./components/Cart";
// import RestaurantMenu from "./components/RestaurantMenu";
// // import Grocery from "./components/Grocery";
// const Grocery=lazy(()=>import("./components/Grocery"))
// const AppLayout=()=>{
//   return (
//     <div className="app">
//      <Header />
//      <Outlet/>
//      <Footer />
//     </div>
//   )
// }
// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout />,
//     children: [
//       {
//         path: "/",
//         element: (
//           <Suspense fallback={<h1>Loading .....</h1>}>
//             <Body />
//           </Suspense>
//         ),
//       },
//       {
//         path: "/about",
//         element: (
//           <Suspense fallback={<h1>Loading .....</h1>}>
//             <About />
//           </Suspense>
//         ),
//       },
//       {
//         path: "/contact",
//         element: (
//           <Suspense fallback={<h1>Loading .....</h1>}>
//             <Contact />
//           </Suspense>
//         ),
//       },
//       {
//         path: "/grocery",
//         element: (
//           <Suspense fallback={<h1>Loading .....</h1>}>
//             <Grocery />
//           </Suspense>
//         ),
//       },
//       {
//         path: "/restaurants/:resId",
//         element: (
//           <Suspense fallback={<h1>Loading .....</h1>}>
//             <RestaurantMenu />
//           </Suspense>
//         ),
//       },
//       {
//         path:"/cart",
//         element: (
//           <Suspense fallback={<h1>Loading.....</h1>}>
//             <Cart />
//           </Suspense>
//         ),
//       }
//     ],
//   },
// ]);
// root.render(<RouterProvider router={appRouter}/>);

import React, { lazy, Suspense, createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Cart from "./components/Cart";
import { About } from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Payment from "./components/Payment";
const Grocery = lazy(() => import("./components/Grocery"));
import Login from "./components/Login.js";
import SignUp from "./components/SignUp.js";
// 1. Create Cart Context
import { useContext } from "react";
import { useEffect } from "react";
export const CartContext = createContext();

import UserContext from "./utils/UserContext.js";
const AppLayout = () => {
  const [cart, setCart] = useState();
 const  {loggedInUser}  = useContext(UserContext);
  const [userName, setUserInfo] = useState();
  useEffect(()=>{
    const data={
      name:"Vishal Patidar"
    }
    setUserInfo(data.name);

  },[])

  // Add item to the cart
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  // Update item quantity
  const updateCartItem = (id, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(newQuantity, 1) } : item
      )
    );
  };

  // Remove item from the cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateCartItem,
        removeFromCart,
        loggedInUser: userName,
      }}
    >
      <div className="app">
        <UserContext.Provider value={{ loggedInUser: userName }}>
          {" "}
          <Header />
        </UserContext.Provider>
        <Suspense fallback={<h1>Loading .....</h1>}>
          <Outlet />
        </Suspense>
        <Footer />
      </div>
    </CartContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/grocery", element: <Grocery /> },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
      { path: "/cart", element: <Cart /> },
      
      { path: "/checkout", element: <Payment /> },
      {
        path:"/login",
        element:<Login/>
      },{
        path:"/signup",
        element:<SignUp/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("js"));
root.render(<RouterProvider router={appRouter} />);

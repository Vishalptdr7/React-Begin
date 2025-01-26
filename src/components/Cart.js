// import React, { useContext } from "react";
// import { CartContext } from "../app.js";
// import { useNavigate } from "react-router-dom";
// const Cart = () => {
//   const { cart, updateCartItem, removeFromCart } = useContext(CartContext);
//   const navigate = useNavigate();
//   console.log(cart)
//   // Calculate the total price
//   const totalPrice = cart.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );
//    const handleProceedToCheckout = () => {
//      navigate("/checkout");
//    };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div className="flex flex-col gap-4">
            
//           {cart.map((item) => (
//             <div
//               key={item.id}
//               className="flex items-center gap-4 border p-4 rounded-lg shadow-md"
//             >
//               {/* Item Image */}
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-20 h-20 object-cover rounded-md"
//               />

//               {/* Item Details */}
//               <div className="flex-1">
//                 <h3 className="font-bold text-lg">{item.name}</h3>
//                 <p className="text-sm text-gray-600">
//                   Price: ₹{item.price} x {item.quantity}
//                 </p>
//               </div>

//               {/* Quantity Controls */}
//               <div className="flex items-center gap-2">
//                 <button
//                   className="px-2 py-1 border rounded-md bg-gray-200 hover:bg-gray-300"
//                   onClick={() => updateCartItem(item.id, item.quantity - 1)}
//                   disabled={item.quantity === 1}
//                 >
//                   -
//                 </button>
//                 <span>{item.quantity}</span>
//                 <button
//                   className="px-2 py-1 border rounded-md bg-gray-200 hover:bg-gray-300"
//                   onClick={() => updateCartItem(item.id, item.quantity + 1)}
//                 >
//                   +
//                 </button>
//               </div>

//               {/* Remove Button */}
//               <button
//                 className="text-red-500 font-semibold"
//                 onClick={() => removeFromCart(item.id)}
//               >
//                 Remove
//               </button>
//             </div>
//           ))}

//           {/* Total Price */}
//           <div className="mt-6 text-right">
//             <h3 className="text-xl font-bold">Total: ₹{totalPrice}</h3>
//           </div>
//           <button
//             onClick={handleProceedToCheckout}
//             className="mt-6 w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
//           >
//             Proceed to Checkout
//           </button>
//         </div>
//       )}
//       <div></div>
//     </div>
//   );
// };

// export default Cart;

import React, { useContext } from "react";
import { CartContext } from "../app.js";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart = [], updateCartItem, removeFromCart } = useContext(CartContext); // Added fallback for cart
  const navigate = useNavigate();

  // Calculate the total price
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleProceedToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 border p-4 rounded-lg shadow-md"
            >
              {/* Item Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md"
              />

              {/* Item Details */}
              <div className="flex-1">
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="text-sm text-gray-600">
                  Price: ₹{item.price} x {item.quantity}
                </p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-2">
                <button
                  className="px-2 py-1 border rounded-md bg-gray-200 hover:bg-gray-300"
                  onClick={() => updateCartItem(item.id, item.quantity - 1)}
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="px-2 py-1 border rounded-md bg-gray-200 hover:bg-gray-300"
                  onClick={() => updateCartItem(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>

              {/* Remove Button */}
              <button
                className="text-red-500 font-semibold"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total Price */}
          <div className="mt-6 text-right">
            <h3 className="text-xl font-bold">Total: ₹{totalPrice}</h3>
          </div>
          <button
            onClick={handleProceedToCheckout}
            className="mt-6 w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
      <div></div>
    </div>
  );
};

export default Cart;

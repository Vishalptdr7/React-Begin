import React, { useContext } from "react";
import { CartContext } from "../app";

const Payment = () => {
  const { cart } = useContext(CartContext);

  // Calculate the total price
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handlePayment = (event) => {
    event.preventDefault();
    alert("Payment Successful!"); // Replace with actual payment handling logic
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Payment</h2>

      <div className="border p-4 mb-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>{item.name}</span>
              <span>
                ₹{item.price} x {item.quantity}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-4 text-right">
          <h3 className="text-xl font-bold">Total: ₹{totalPrice}</h3>
        </div>
      </div>

      {/* Payment Form */}
      <form onSubmit={handlePayment} className="space-y-4">
        <input
          type="text"
          placeholder="Card Number"
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="Expiry Date (MM/YY)"
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="CVV"
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Payment;

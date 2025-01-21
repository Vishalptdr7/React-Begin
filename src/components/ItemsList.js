

import React, { useContext } from "react";
import { CDN_LINK } from "../utils/Data";
import { CartContext } from "../app.js";

const ItemsList = ({ data,dummy }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {data.map((item) => (
        <div
          className="w-72 border border-gray-300 rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition-shadow duration-200"
          key={item.card.info.id}
        >
          <div className="flex flex-col items-center">
            <img
              className="w-full h-40 object-cover rounded-md"
              src={CDN_LINK + item.card.info.imageId}
              alt={item.card.info.name}
            />
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              {item.card.info.name}
            </h3>
            <p className="mt-2 text-gray-500 text-sm text-center">
              {item.card.info.description || "No description available."}
            </p>
            <span className="mt-4 text-green-600 font-bold text-lg">
              ₹{item.card.info.defaultPrice / 100 || item.card.info.price / 100}
            </span>
            
            <button
              className="mt-4 w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors duration-200"
              onClick={() =>
                addToCart({
                  id: item.card.info.id,
                  name: item.card.info.name,
                  price:
                    item.card.info.defaultPrice / 100 ||
                    item.card.info.price / 100,
                  image: CDN_LINK + item.card.info.imageId,
                })
              }
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;

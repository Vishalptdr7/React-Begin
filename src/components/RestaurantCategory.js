import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
console.log(data);
  const toggleItem = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full flex justify-center items-center p-4">
      <div className="w-1/2 border rounded-lg shadow-md p-6 bg-white">
        <div className="py-4 border-b dark:border-white/10">
          <h2>
            <button
              onClick={toggleItem}
              className="flex justify-center items-center text-left font-bold text-navy-900 focus:outline-none w-full"
            >
              <span className="flex justify-center items-center">
                {data.title} ({data.itemCards.length})
              </span>
              <svg
                className={`w-5 h-5 transform transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                } text-navy-900 ml-2`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </h2>
          {isOpen && (
            <div className="mt-4 text-center text-medium text-navy-900">
             <ItemsList key={data.id} data={data.itemCards}/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;

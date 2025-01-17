import React, { useState } from "react";

const Grocery = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setItems([...items, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleRemoveItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Grocery List
        </h1>
        <form onSubmit={handleAddItem} className="flex items-center gap-2 mb-6">
          <input
            type="text"
            placeholder="Add item"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add
          </button>
        </form>
        <ul className="divide-y divide-gray-200">
          {items.length > 0 ? (
            items.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center py-2"
              >
                <span className="text-gray-700">{item}</span>
                <button
                  onClick={() => handleRemoveItem(index)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </li>
            ))
          ) : (
            <li className="text-center text-gray-500">No items in the list.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Grocery;

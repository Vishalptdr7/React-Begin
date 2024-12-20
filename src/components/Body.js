import React from "react";
import ReactDOM from "react-dom/client"
import RestoCard from "../components/RestoCard.js";
const cardData = [
  {
    id: 1,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/dc74a4b7-8d63-4eb7-91c9-048973c2cc99_1003414.jpg",
    name: "Sharma Bhojnalaya",
    description: "All Veg And Non-Veg",
    rating: 4.4,
    time: "38 minutes",
  },
  {
    id: 2,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yzgqriufpzmloogcn2vl",
    name: "Gupta Restaurant",
    description: "Pure Veg",
    rating: 4.7,
    time: "30 minutes",
  },
  {
    id: 3,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/26/78517964-20dc-4e37-92ce-8990deb14ab6_898041.jpg",
    name: "Tasty Bites",
    description: "Snacks and Beverages",
    rating: 4.5,
    time: "25 minutes",
  },
  {
    id: 4,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/dd519572ed1bed19de47e94186e743ea",
    name: "Fresh Dine",
    description: "Fresh and Organic Foods",
    rating: 4.2,
    time: "40 minutes",
  },
  {
    id: 5,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/crncfqmsuosriqcrp9ez",
    name: "Spicy Delights",
    description: "Spicy Indian Cuisine",
    rating: 4.6,
    time: "20 minutes",
  },
  {
    id: 6,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/15/9de3a721-5e96-41d2-bb3e-3cbeff47fbd3_870899.jpg",
    name: "Royal Feast",
    description: "Luxury Dining",
    rating: 4.8,
    time: "50 minutes",
  },
  {
    id: 7,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/glepanv4xjfnhsbieam1",
    name: "Sushi Express",
    description: "Japanese Sushi and Rolls",
    rating: 4.3,
    time: "25 minutes",
  },
  {
    id: 8,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/zibx2nvhjqws0qaph4k3",
    name: "Sweet Treats",
    description: "Desserts and Sweets",
    rating: 4.9,
    time: "15 minutes",
  },
  {
    id: 9,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vkhcohhmqfczycw9vsar",
    name: "Ocean Breeze",
    description: "Seafood and Fish",
    rating: 4.7,
    time: "30 minutes",
  },
  {
    id: 10,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/3ac249d5f0a25a7b61f69e93614ed09d",
    name: "Pasta Corner",
    description: "Italian Pasta and Pizzas",
    rating: 4.6,
    time: "35 minutes",
  },
  {
    id: 11,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gp1ityra6utvzqn6ghnv",
    name: "The Veg Hub",
    description: "Veg and Vegan",
    rating: 4.3,
    time: "28 minutes",
  },
  {
    id: 12,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/8/8/47874e65-d02e-4359-a4b1-4122fa5d397d_26d5ba20-0c59-455d-a21a-197499b185f0.jpg",
    name: "Burger Shack",
    description: "Gourmet Burgers",
    rating: 4.5,
    time: "22 minutes",
  },
];



const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search here..."
          className="search-input"
        />
        <button className="search-button">Search</button>
      </div>

      <div className="resto-container">
        {/* we create a map function to get all the data inside the carddata object */}

        {cardData.map((data) => (
          <RestoCard key={data.id} restData={data} />
        ))}

        {/* {cardData.map((card) => (
          <RestoCard
            key={card.id}
            image={card.image}
            name={card.name}
            description={card.description}
            rating={card.rating}
            time={card.time}
          />
        ))} */}
      </div>
    </div>
  );
};
export default Body;

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import RestoCard,{withPromotedResto} from "../components/RestoCard.js";
import cardDataMock from "../utils/Data.js"; // Renamed to avoid conflict
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
const Body = () => {
  const [cardData, setCardData] = useState([]); // State for fetched data
  const [filterData, setFilterData] = useState([]); // State for filtered data
  const [searchText, setSearchText] = useState(""); // State for search input
  
  useEffect(() => {
    fetchData(); // Fetch data when component mounts
  }, []);
  
  const RestoantCardPromoted=withPromotedResto(RestoCard);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();

      // Extracting restaurant data from API response
      const restop =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      if (restop) {
        setCardData(restop); // Set fetched data to state
        setFilterData(restop); // Set filtered data to state
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const onlineStatus = useOnlineStatus();
  
  if (onlineStatus===false){
    return <div>You are offline</div> // Show message when offline 
  }
  return cardData.length === 0 ? (
    // Show shimmer during data fetching
    <Shimmer />
  ) : (
    <div className="body">
      {/* Search bar */}
      <div className="filter">
        <div className="search-container flex justify-center items-center gap-2 p-2 bg-gray-100 border border-gray-300 rounded-lg max-w-screen-xl mx-auto my-5">
          <input
            type="text"
            placeholder="Search here..."
            className="search-input flex-1 p-2 border border-gray-400 rounded-md text-base outline-none focus:border-blue-500"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-button px-4 py-2 bg-blue-500 text-white border-none rounded-md cursor-pointer text-base hover:bg-blue-700"
            onClick={() => {
              const filteredData = cardData.filter((data) =>
                data.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterData(filteredData);
            }}
          >
            Search
          </button>
        </div>
      </div>

      {/* Render restaurant cards */}
      <div className="resto-container flex flex-wrap justify-around">
        {" "}
        
        {filterData.map((data) => (
          <Link to={"/restaurants/" + data.info.id}>
            {data?.info.avgRating >= 4.3 ? (
              <RestoantCardPromoted key={data.info.id} restData={data} />
            ) : (
              <RestoCard key={data.info.id} restData={data} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;


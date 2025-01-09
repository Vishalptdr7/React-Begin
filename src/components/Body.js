import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import RestoCard from "../components/RestoCard.js";
import cardDataMock from "../utils/Data.js"; // Renamed to avoid conflict
import Shimmer from "./Shimmer.js";

const Body = () => {
  const [cardData, setCardData] = useState([]); // State for fetched data
  const [filterData, setFilterData] = useState([]); // State for filtered data
  const [searchText, setSearchText] = useState(""); // State for search input

  useEffect(() => {
    fetchData(); // Fetch data when component mounts
  }, []);

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

  return cardData.length === 0 ? (
    // Show shimmer during data fetching
    <Shimmer />
  ) : (
    <div className="body">
      {/* Search bar */}
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search here..."
            className="search-input"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-button"
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
      <div className="resto-container">
        {filterData.map((data) => (
          <RestoCard key={data.info.id} restData={data} />
        ))}
      </div>
    </div>
  );
};

export default Body;


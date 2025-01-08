import React ,{useState,useEffect} from "react";
import ReactDOM from "react-dom/client"
import RestoCard from "../components/RestoCard.js";
import cardData from "../utils/Data.js";
import Shimmer from "./Shimmer.js";


const Body = () => {
    const [cardDataa,setCardData] = useState(cardData);
    
    useEffect(()=>{
      fetchData();
    },[]);
    const fetchData=async()=>{
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&collection=80463&tags=layout_BAU_Contextual%2Cnoodles&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    console.log(json);
    
    }
    
    
    
    
    
  return (cardDataa.length)===0 ? <Shimmer></Shimmer>:(
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search here..."
          className="search-input"
        />
        <button className="search-button">Search</button>
      </div>
      {/* Shimmer */}
      


      {/* Filter data on button */}
      <div className="filter">
        {}
        <button
          className="filter-btn"
          onClick={() => {
            const fileterdData = cardDataa.filter((data) => data.rating > 4.4);

            setCardData(fileterdData);
          }}
        >
          Get Top
        </button>
      </div>
      <div className="resto-container">
        {/* we create a map function to get all the data inside the carddata object */}

        {cardDataa.map((data) => (
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

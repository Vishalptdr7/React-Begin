import React ,{useState,useEffect} from "react";
import ReactDOM from "react-dom/client"
import RestoCard from "../components/RestoCard.js";
import cardData from "../utils/Data.js";
import Shimmer from "./Shimmer.js";


const Body = () => {
    const [cardDataa, setCardData] = useState(cardData);
    const [filterData, setFilterData] = useState(cardData);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&collection=80463&tags=layout_BAU_Contextual%2Cnoodles&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
        );
        const json = await data.json();
        console.log(json);
    };

    return cardDataa.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
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
                            const filteredData = cardDataa.filter((data) =>
                                data.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilterData(filteredData);
                        }}
                    >
                        Search
                    </button>
                </div>
            </div>

            <div className="resto-container">
                {filterData.map((data) => (
                    <RestoCard key={data.id} restData={data} />
                ))}
            </div>
        </div>
    );
};
export default Body;



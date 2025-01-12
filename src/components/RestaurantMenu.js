// import { useState ,useEffect} from "react";
// import Shimmer from "./Shimmer";
// const RestaurantMenu=()=>{
//     const [resInfo,setResInfo]=useState(null);

//     useEffect(()=>{
//         fetchMenu();
//     },[]);
//     const fetchMenu=async()=>{
//         const data = await fetch(
//         "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=1003414&catalog_qa=undefined&submitAction=ENTER"
//         );
//         const json=await data.json();
//         console.log(json);
//         setResInfo(json.data);
//     }
//     const {cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info; 
//     return resInfo===null?<Shimmer/>:(
//         <div className="menu">
//             <h2>{}</h2>
//             <h3>
//                 {cuisines}
//             </h3>
//             <h3>
//                 {}
//             </h3>
           
//         </div>
//     )
// }
// export default RestaurantMenu;
// import { useState, useEffect } from "react";
// import Shimmer from "./Shimmer";

// const RestaurantMenu = () => {
//   const [resInfo, setResInfo] = useState(null);

//   useEffect(() => {
//     fetchMenu();
//   }, []); // Add dependency array to prevent infinite re-renders.

//   const fetchMenu = async () => {
//     try {
//       const data = await fetch(
//         "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=1003414&catalog_qa=undefined&submitAction=ENTER"
//       );
//       const json = await data.json();
//       console.log(json);
//       setResInfo(json.data); // Set fetched data to state.
//     } catch (error) {
//       console.error("Failed to fetch menu data:", error);
//     }
//   };
//   const name=resInfo?.cards?.[2]?.card?.card?.info?.name
//   const cuisines = resInfo?.cards?.[2]?.card?.card?.info?.cuisines;
//   const costForTwoMessage =
//     resInfo?.cards?.[2]?.card?.card?.info?.costForTwoMessage;
//   const itemsCards  =
//     resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
//   return resInfo === null ? (
//     <Shimmer />
//   ) : (
//     <div className="menu">
//       <h2>Restaurant Menu</h2>
//       <h2>{name}</h2>
//       <h3>Cuisines: {cuisines || "Not available"}</h3>
//       <h3>Cost for Two: {costForTwoMessage || "Not available"}</h3>
//       <ul>
//         {itemsCards.map((item) => (
//           <li >{item?.card?.info?.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RestaurantMenu;


// import { useState, useEffect } from "react";
// import Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom";
// const RestaurantMenu = () => {
//   const [resInfo, setResInfo] = useState(null);
//   const {resId}=useParams();

//   useEffect(() => {
    
//     fetchMenu();
//   }, []);


//   const fetchMenu = async () => {
//     try {
//       const data = await fetch(
//         `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
//       );

//       const json = await data.json();
//       setResInfo(json.data);
//     } catch (error) {
//       console.error("Failed to fetch menu data:", error);
//     }
//   };
//   const name = resInfo?.cards?.[2]?.card?.card?.info?.name;
//   const cuisines = resInfo?.cards?.[2]?.card?.card?.info?.cuisines;
//   const costForTwoMessage =
//     resInfo?.cards?.[2]?.card?.card?.info?.costForTwoMessage;
//   const itemsCards =
//     resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
//       ?.card?.itemCards;

//   return resInfo === null ? (
//     <Shimmer />
//   ) : (
//     <div className="menu">
//       <h2>Restaurant Menu</h2>
//       <h2>{name}</h2>
//       <h3>Cuisines: {cuisines || "Not available"}</h3>
//       <h3>Cost for Two: {costForTwoMessage || "Not available"}</h3>
//       <ul>
//         {itemsCards?.map((item, index) => (
//           <li key={index}>
//             {item?.card?.info?.name}= ₹
//             {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RestaurantMenu;






import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  console.log(resId);
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data = await fetch(
          "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();
        setResInfo(json.data);
      } catch (error) {
        console.error("Failed to fetch menu data:", error);
      }
    };

    fetchMenu();
  }, [resId]); // Added resId to the dependency array to refetch if resId changes.

  const name = resInfo?.cards?.[2]?.card?.card?.info?.name;
  const cuisines = resInfo?.cards?.[2]?.card?.card?.info?.cuisines;
  const costForTwoMessage =
    resInfo?.cards?.[2]?.card?.card?.info?.costForTwoMessage;
  const itemsCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card?.itemCards;

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h2>Restaurant Menu</h2>
      <h2>{name}</h2>
      <h3>Cuisines: {cuisines || "Not available"}</h3>
      <h3>Cost for Two: {costForTwoMessage || "Not available"}</h3>
      <ul>
        {itemsCards?.map((item, index) => (
          <li key={index}>
            {item?.card?.info?.name} = ₹
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

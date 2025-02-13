
import Shimmer from "./Shimmer.js";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import RestaurantCategory from "./RestaurantCategory.js";
import { useState } from "react";
// import RestautantCategory from "./RestaurantCategory.js";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo=useRestaurantMenu(resId);
   const [showIndex, setShowIndex]=useState(null);
   
   
  const dummy="Dummy Data";

  
    const data =
      resInfo?.cards?.[2]?.card?.card?.info;
  const itemsCard =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card?.itemCards;

  const category=resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c)=>c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  // console.log(category);
 
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className=" text-center  ">
      <h2 className="font-bold my-10 text-2xl">Restaurant Menu</h2>
      <h2>{data.name}</h2>
      <div>
        {
          category.map((cat,index)=>(
             <RestaurantCategory dummy={dummy} setShowIndex={()=>setShowIndex(index)} key ={cat.id} data={cat.card.card} showItems={ index===showIndex ? true:false} /> 
          )
           
          )
        }
      </div>
    </div>
  );
};


export default RestaurantMenu;

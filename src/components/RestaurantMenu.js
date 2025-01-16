
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo=useRestaurantMenu(resId);
  console.log(resId);
    const data =
      resInfo?.cards?.[2]?.card?.card?.info;
  const itemsCard =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card?.itemCards;

  const newData=resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c=>c?.card?.card?.["@type"])
  console.log(newData);
 
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className=" text-center  ">
      <h2 className="font-bold my-10 text-2xl">Restaurant Menu</h2>
      <h2>{data.name}</h2>
      
    </div>
  );
};

export default RestaurantMenu;

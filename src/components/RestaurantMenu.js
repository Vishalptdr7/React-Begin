
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo=useRestaurantMenu(resId);
  console.log(resId);
  
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

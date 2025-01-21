import React from "react";
import ReactDOM from "react-dom/client";
import { CDN_LINK } from "../utils/Data";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
const RestoCard = (data) => {
  const { restData } = data;
  
  const {
    name,
    cloudinaryImageId,
    id,
    description,
    avgRating,
    sla,
    cuisines,
    costForTwo,areaName
  } = restData?.info;
    const { loggedInUser } = useContext(UserContext);
  return (
    <div className="cards flex flex-col items-center justify-center p-4 border-none transition-shadow transition-border duration-300 w-64 m-5 bg-white rounded-lg shadow-sm hover:shadow-md cursor-pointer">
      {" "}
      <img
        className="card-image w-44 h-44 rounded-md mb-2"
        src={CDN_LINK + cloudinaryImageId}
        alt="restaurant"
        height="150"
        width="200"
      />
      <h3 className="text-lg my-2 font-semibold text-gray-800">{name}</h3>
      <h4 className="text-sm my-1 text-gray-600">{areaName}</h4>
      <h4 className="text-sm my-1 text-gray-600">Rating: {avgRating}</h4>
      <h4 className="text-sm my-1 text-gray-600">{sla.slaString} </h4>
      <h4>User:{loggedInUser}</h4>
    </div>
  );
};



// const RestoCard=({name,image,id,description,rating,time})=>{

//   return (
//     <div className="cards">
//       <img
//         className="card-image"
//         src={image}
//         alt="restaurant"
//         height="150"
//         width="200"
//       />
//       <h3>{name}</h3>
//       <h4>{description}</h4>
//       <h4>Rating: {rating}</h4>
//       <h4>{time}</h4>
//     </div>
//   );
// }


///high order component
export const withPromotedResto=(RestoCard)=>{
  return (data)=>{
    return (
      <div>
        <label className=" absolute bg-orange-300 text-white  m-1 p-1 rounded-lg">
          Promoted
        </label>
        <RestoCard {...data} />
      </div>
    );
  }
}
export default RestoCard;

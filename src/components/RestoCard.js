import React from "react";
import ReactDOM from "react-dom/client";
import { CDN_LINK } from "../utils/Data";
const RestoCard = (data) => {
  const { restData } = data;
  
  const { name, cloudinaryImageId, id, description, avgRating, time } =
    restData?.info;
    const image=''
  return (
    <div className="cards">
      <img
        className="card-image"
        src={CDN_LINK+cloudinaryImageId}
        alt="restaurant"
        height="150"
        width="200"
      />
      <h3>{name}</h3>
      <h4>{description}</h4>
      <h4>Rating: {avgRating}</h4>
      <h4>{time}</h4>
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
export default RestoCard;

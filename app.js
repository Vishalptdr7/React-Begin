import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./images/logo.png"




// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "Jai Shree Ram")
//   )
// );
// console.log(parent);
// const root1 = ReactDOM.createRoot(document.getElementById("js"));
// root1.render(parent);

// const parent1 = React.createElement(
//   "div",
//   { id: "parent1" },
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", { key: "mahakal" }, "Jai Shree Mahakal"),
//     React.createElement("h2", { key: "shyam" }, "Jai Shree Shyam"),
//   ])
// );

// const root2 = ReactDOM.createRoot(document.getElementById("js1"));
// root2.render(parent1);
// console.log(parent1);

// const jsxheading = (<h1 id="head">
//   Hello World from React with JSX 
//   </h1>);

// const root=ReactDOM.createRoot(document.getElementById("js"))
// root.render(jsxheading)
// console.log(jsxheading)


// const name=(<h1 className="name">
//   Vishal Patidar
//   </h1>);
// const rootname=ReactDOM.createRoot(document.getElementById("center"));
// rootname.render(name);


// // react component->

// const HelloWorld = () => {
//   return (
//     <div>
//       <h1>Hello, World!</h1>
//     </div>
//   );
// };

// const roothello = ReactDOM.createRoot(document.getElementById("hello"));

// roothello.render(<HelloWorld />);


// const Firstcompo=()=>(
//   <div>
//     <h1>This is a first component</h1>
//   </div>

// );
// const Secondcompo = () => (
//   <div>
//     <Firstcompo />
//     <h1>This is a second component</h1>
//   </div>
// );

// const rootsecond = ReactDOM.createRoot(document.getElementById("second"));

// rootsecond.render(<Secondcompo />);




// //// Create a element and put inside the component
// const ele=(
//   <div>
//     <h1>This is a Element </h1>
//     <p>This is a paragraph</p>
//   </div>
// );
// const Thirdcompo=()=>(
//   <div>
//     {ele}
//     <h1>This is a third component</h1>
//   </div>
// );
// const rootThird=ReactDOM.createRoot(document.getElementById("eleInsideCompo"));

// rootThird.render(<Thirdcompo />);





// Website start



const Header=()=>{
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

const root=ReactDOM.createRoot(document.getElementById("js"));



const styles={
backgroundColor:"#0f0f0f0f"
}



const cardData = [
  {
    id: 1,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/dc74a4b7-8d63-4eb7-91c9-048973c2cc99_1003414.jpg",
    name: "Sharma Bhojnalaya",
    description: "All Veg And Non-Veg",
    rating: 4.4,
    time: "38 minutes",
  },
  {
    id: 2,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yzgqriufpzmloogcn2vl",
    name: "Gupta Restaurant",
    description: "Pure Veg",
    rating: 4.7,
    time: "30 minutes",
  },
  {
    id: 3,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/26/78517964-20dc-4e37-92ce-8990deb14ab6_898041.jpg",
    name: "Tasty Bites",
    description: "Snacks and Beverages",
    rating: 4.5,
    time: "25 minutes",
  },
  {
    id: 4,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/dd519572ed1bed19de47e94186e743ea",
    name: "Fresh Dine",
    description: "Fresh and Organic Foods",
    rating: 4.2,
    time: "40 minutes",
  },
  {
    id: 5,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/crncfqmsuosriqcrp9ez",
    name: "Spicy Delights",
    description: "Spicy Indian Cuisine",
    rating: 4.6,
    time: "20 minutes",
  },
  {
    id: 6,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/15/9de3a721-5e96-41d2-bb3e-3cbeff47fbd3_870899.jpg",
    name: "Royal Feast",
    description: "Luxury Dining",
    rating: 4.8,
    time: "50 minutes",
  },
  {
    id: 7,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/glepanv4xjfnhsbieam1",
    name: "Sushi Express",
    description: "Japanese Sushi and Rolls",
    rating: 4.3,
    time: "25 minutes",
  },
  {
    id: 8,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/zibx2nvhjqws0qaph4k3",
    name: "Sweet Treats",
    description: "Desserts and Sweets",
    rating: 4.9,
    time: "15 minutes",
  },
  {
    id: 9,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vkhcohhmqfczycw9vsar",
    name: "Ocean Breeze",
    description: "Seafood and Fish",
    rating: 4.7,
    time: "30 minutes",
  },
  {
    id: 10,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/3ac249d5f0a25a7b61f69e93614ed09d",
    name: "Pasta Corner",
    description: "Italian Pasta and Pizzas",
    rating: 4.6,
    time: "35 minutes",
  },
  {
    id: 11,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gp1ityra6utvzqn6ghnv",
    name: "The Veg Hub",
    description: "Veg and Vegan",
    rating: 4.3,
    time: "28 minutes",
  },
  {
    id: 12,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/8/8/47874e65-d02e-4359-a4b1-4122fa5d397d_26d5ba20-0c59-455d-a21a-197499b185f0.jpg",
    name: "Burger Shack",
    description: "Gourmet Burgers",
    rating: 4.5,
    time: "22 minutes",
  },
];



 const RestoCard=(data)=>{
   const {restData}=data
        const {name,image,id,description,rating,time}=restData;

      return (
    <div className="cards">
      <img
        className="card-image"
        src={image}
        alt="restaurant"
        height="150"
        width="200"
      />
      <h3>{name}</h3>
      <h4>{description}</h4>
      <h4>Rating: {rating}</h4>
      <h4>{time}</h4>
    </div>
  );
        } 
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
const Body=()=>{
  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Search here..." className="search-input" />
        <button className="search-button">Search</button>
      </div>

      <div className="resto-container">
        {/* we create a map function to get all the data inside the carddata object */}
         
        {cardData.map((data) => (                <RestoCard key={data.id} restData={data} />
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
}









////Footer 


import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Description */}
        <div className="footer-logo">
          <div>
            <h2>Vishal </h2>
            <h3>Food Point</h3>
          </div>
          <p>
            Your ultimate destination for delicious meals delivered to your
            doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="footer-newsletter">
          <h3>Subscribe to Our Newsletter</h3>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} This Website have All Rights Reserved.</p>
      </div>
    </footer>
  );
};



const AppLayout=()=>{
  return (
    <div className="app">
     <Header />
     <Body />
     <Footer />
    </div>
  )
}
root.render(<AppLayout />);








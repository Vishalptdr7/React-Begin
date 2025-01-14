import {janki} from "../../images/janki.jpg"
import {vishal} from "../../images/vishal.jpg"
import UserClass from "./UserClass.js";
import User from "./User.js";
import React from "react";
//class based component 
// export const About=()=>{
//     return (
//       <div>
//         <User name={"Vishal Patidar"} />
//         <UserClass name ={"Ankit Yadav"} location={"Biora"}/>
//         <div className="about-section"> 
//           <h1>About Us Page</h1>
//           <p>Some text about who we are and what we do.</p>
//           <p>
//             Resize the browser window to see that this page is responsive by the
//             way.
//           </p>
//         </div>

//         <h2 style={{ textAlign: "center" }}>Our Team</h2>
//         <div className="row">
//           <div className="column">
//             <div className="card">
//               <img
//                 src={vishal}
//                 alt="Vishal"
//                 style={{ width: "100%" }}
//               />
//               <div className="container">
//                 <h2>Vishal Patidar</h2>
//                 <p className="title">CEO & Founder</p>
//                 <p>He is the Founder of the Vishal Mega Food.</p>
//                 <p>vishal@gmail.com</p>
//                 <p>
//                   <button className="button">Contact</button>
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="column">
//             <div className="card">
//               <img
//                 src="/w3images/team2.jpg"
//                 alt="Mike"
//                 style={{ width: "100%" }}
//               />
//               <div className="container">
//                 <h2>Janki Patidar</h2>
//                 <p className="title">Art Director</p>
//                 <p>She is a Professional Art Director.</p>
//                 <p>janki@gmail.com</p>
//                 <p>
//                   <button className="button">Contact</button>
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="column">
//             <div className="card">
//               <img
//                 src="/w3images/team3.jpg"
//                 alt="John"
//                 style={{ width: "100%" }}
//               />
//               <div className="container">
//                 <h2>Ishu Patidar</h2>
//                 <p className="title">Designer</p>
//                 <p>She is a professional Designer .</p>
//                 <p>ishupatidar@gmail.com</p>
//                 <p>
//                   <button className="button">Contact</button>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
// }




export class About extends React.Component {
  constructor(props){
    super(props)
  }
  render()
 { return (
    <div>
      
      <UserClass name={"Ankit Yadav"} location={"Biora"} email={"ankityadav@gmail.com" } title={"CEO & Founder"} />
     
    </div>
  );}
};
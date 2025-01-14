import { useState } from "react";

const User=({name})=>{
    const [count,setCount]=useState(0);
    
    

    return (
      <div>
        
        <div>
          <h1>Count: {count}</h1>
        </div>
        <h1>User Profile</h1>
        <p>Welcome, {name}</p>
        <button>Edit Profile</button>
      </div>
    );
}
export default User;
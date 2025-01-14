import { useEffect, useState } from "react";

const User=({name})=>{
    const [count,setCount]=useState(0);
    useEffect(()=>{
      console.log("kfdna");
        const timer=setInterval(()=>{
          
        },1000);
        // This return is neccessary because if we move on another component then it will stop the above function
    return ()=>{
      clearInterval(timer)
      console.log("BY");
    }
    },[]);
    

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
import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        
        this.state={
            userInfo:{
                title:"Founder & CEO"

            },
            count:1, 
            
        }
        
    }
   async componentDidMount(){
    const data = await fetch("https://api.github.com/users/Vishalptdr7");
    const json= await  data.json();
    console.log(json);
    this.setState({
        userInfo:json,
    })
    }

    render(){
        return (
          <div>
            <div className="about-section">
              <h1>About Us Page</h1>
              <p>Some text about who we are and what we do.</p>
              <p>
                Resize the browser window to see that this page is responsive by
                the way.
              </p>
            </div>

            <h2 style={{ textAlign: "center" }}>Our Team</h2>
            <div className="row">
              <div className="column">
                <div className="card">
                  <img src={this.state.userInfo.avatar_url} alt="Vishal" style={{ width: "100%" }} />
                  <div className="container">
                    <h2>{this.state.userInfo.name}</h2>
                    <p className="title">Founder & CEO</p>
                    <p>He is the Founder of the Vishal Mega Food.</p>
                    <p>{this.state.userInfo.email}</p>
                    <p>{this.state.userInfo.location}</p>
                    <p>
                      <button className="button">Contact</button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default UserClass;
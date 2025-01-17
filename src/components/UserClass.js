import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        title: "Founder & CEO",
      },
      count: 1,
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Vishalptdr7");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="about-section mb-8">
          <h1 className="text-3xl font-bold text-center text-gray-900">
            About Us Page
          </h1>
          <p className="mt-4 text-center text-gray-600">
            Some text about who we are and what we do.
          </p>
          <p className="mt-4 text-center text-gray-500">
            Resize the browser window to see that this page is responsive by the
            way.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
          Our Team
        </h2>
        <div className="row flex justify-center">
          <div className="column w-96">
            <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={this.state.userInfo.avatar_url}
                alt="Vishal"
                className="w-full h-56 object-cover"
              />
              <div className="container p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {this.state.userInfo.name}
                </h2>
                <p className="text-lg text-gray-600">
                  {this.state.userInfo.title}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  He is the Founder of the Vishal Mega Food.
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  {this.state.userInfo.email}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  {this.state.userInfo.location}
                </p>
                <p className="mt-4">
                  <button className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors duration-200">
                    Contact
                  </button>
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

import React from "react";
class Userclass extends React.Component {
  constructor(props) {
    console.log("Constructor is Called ");
    super(props);
    this.state = {
      UserInfo: {
        name: "King",
        location: "Pune",
        avatar_url: "https://avatars.githubusercontent.com/u/181271873?v=4",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/heyy-kartik");

    const json = await data.json();

    this.setState({
      UserInfo: json,
    });

    console.log(json);

    console.log("Components Did Mount is Called");
  }
  render() {
    const { name, location, avatar_url } = this.state.UserInfo;
    // const { name, location } = this.props;
    return (
      <div className="userCard">
        <img src={avatar_url}></img>
        <h3> Name : {name}</h3>
        <h3> Location : {location}</h3>
        <h4> Contact : kartikjagdale0511@gmail.com</h4>
      </div>
    );
  }
}

export default Userclass;

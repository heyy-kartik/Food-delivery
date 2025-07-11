import React from "react";
import "./index.css";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./Utillities/useOnlineStatus";
import UserContext from "./Utillities/UserContext";
import LocationHeader from "./locationHeader.jsx";
const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const OnlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);
  return (
    <>
      <div className="HeaderDiv" style={{ position: "relative" }}>
        <div className="LogoDiv">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2iujphOsVMtakrSKi8xXYFwRkWo7XnC0OTA&s"></img>
        </div>
        <div className="nav_items">
          <ul>
            <li>Status : {OnlineStatus ? "Online ✅" : "Offline ❌"}</li>
            <li>
              <Link className="Underline" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="Underline" to={"/about"}>
                {" "}
                About us{" "}
              </Link>
            </li>
            <li className="">
              <Link className="Underline" to={"/contact"}>
                Contact us
              </Link>{" "}
            </li>
            <li>
              <Link className="Underline" to={"/Cart"}>
                Cart{" "}
              </Link>{" "}
            </li>
            <li>
              <button
                onClick={() => {
                  btnName === "Login"
                    ? setbtnName("Logout")
                    : setbtnName("Login");
                  console.log(btnName);
                }}
                className="login_btn"
              >
                {btnName}
              </button>
            </li>
            <li>{loggedInUser}</li>
            <li>
              {" "}
              <LocationHeader />{" "}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;

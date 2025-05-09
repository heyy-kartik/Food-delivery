import React from "react";
import Userclass from "./Userclass";
import RealSCreenshot from "./assets/Real SCreenshot.png"; // Adjust the path as necessary
const About = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
          height: "500px",
          width: "100%",
          zIndex: "",
          backgroundImage: `url(${RealSCreenshot})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
          }}
        ></div>
        <h1
          style={{
            textAlign: "center",
            fontWeight: "600",
            zIndex: "1",
            fontSize: "35px",
            position: "absolute",
            top: "10px",
          }}
        >
          About Us
        </h1>
        <p
          style={{
            margin: "30px",
            fontWeight: "500",
            textAlign: "justify",
            color: "gray",
            fontSize: "20px",
            position: "absolute",
            top: "49px",
          }}
        >
          Swiggy is a new-age consumer-first organization offering an
          easy-to-use convenience platform, accessible through a unified app.
        </p>
      </div>
      <div className="ipoDes">
        <h2
          style={{
            textAlign: "center",
            fontSize: "40px",
            margin: "80px",
            borderBottom: "2px solid orange",
          }}
        >
          IPO DELIVERED NOVEMBER 2024
        </h2>
        <video
          id="video"
          controls="controls"
          autoPlay="true"
          loop
          muted
          style={{
            width: "700px",

            borderRadius: "40px",
            marginLeft: "400px",
          }}
        >
          <source
            style={{ alignContent: "center" }}
            src="https://www.swiggy.com/corporate/wp-content/uploads/2024/11/WhatsApp-Video-2024-11-18-at-15.49.51.mp4"
          ></source>
        </video>
      </div>
      <Userclass></Userclass>
    </>
  );
};

export default About;

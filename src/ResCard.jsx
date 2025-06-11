
import { Link } from "react-router-dom";

const ResCard = ({ resName, cuisines, avgrating, Imgurl, SlaTime, resId }) => {
  return (
    <div className="Container">
      <Link to={"/menu/" + resId} style={{ textDecoration: "none" }}>
        {/* Update this to the correct path */}
        <div className="resDiv" style={{ backgroundColor: "#dcdcdc" }}>
          <img
            src={Imgurl}
            alt="Restaurant"
            style={{ width: "100%", height: "200px", borderRadius: "10px" }}
          />
          <h3 style={{ color: "black", fontSize: "15px" }}> {resName} </h3>
          <h4 style={{ color: "black", fontSize: "13px" }}> {cuisines}</h4>
          <span
            style={{
              display: "flex",
              justifyContent: "flex-start",
              gap: "10px",
            }}
          >
            {" "}
            <h4 style={{ color: "black", fontSize: "14px" }}>
              {avgrating} <i class="fa-solid fa-star"></i>
            </h4>
            <h4 style={{ color: "black", fontSize: "14px" }}> {SlaTime}</h4>
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ResCard;

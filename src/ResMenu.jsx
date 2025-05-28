import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MENU_API_URL from "./Utillities/constats";

const ResMenu = () => {
  const [resState, setresState] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  });

  const fetchMenu = async () => {
    try {
      const response = await fetch(`${MENU_API_URL}${resId}`);
      const json = await response.json();
      setresState(json.data);
      console.log(json.data);
      7;
    } catch (error) {
      console.error("Failed to fetch menu:", error);
    }
  };

  if (!resState) return <h1></h1>;

  const restaurantInfo = resState?.cards?.[2]?.card?.card?.info;
  const itemCards =
    resState?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card?.itemCards;
  console.log(itemCards);
  if (!restaurantInfo || !itemCards || itemCards?.cards?.[0]?.card?.card?.text)
    return (
      <h1 style={{ textAlign: "center", margin: "50px" }}>
        Sorry for The Unconvinence
      </h1>
    );

  const { name, cuisines = [], costForTwoMessage } = restaurantInfo;

  return (
    <div className="menu">
      <h1 style={{ fontWeight: "500", margin: "10px" }}>{name}</h1>
      <h2 style={{ fontWeight: "500", margin: "10px" }}>Menu</h2>
      <h3 style={{ fontWeight: "500", margin: "10px" }}>Recommended</h3>
      <ul style={{ margin: 10 }}>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.{(item.card.info.price ?? 0) / 100}
          </li>
        ))}
      </ul>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
    </div>
  );
};

export default ResMenu;

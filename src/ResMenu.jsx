import React, { useState, useEffect } from "react";
import { ShimmerSectionHeader } from "react-shimmer-effects";
import { ShimmerPostList } from "react-shimmer-effects";
import { useParams } from "react-router-dom";
import MENU_API_URL from "./Utillities/constats";

const ResMenu = () => {
  const [resState, setresState] = useState(null);
  const [loading, setLoading] = useState(true);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
    // eslint-disable-next-line
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const response = await fetch(`${MENU_API_URL}${resId}`);
      const json = await response.json();
      setresState(json.data);
      setLoading(false);
      console.log(json.data);
    } catch (error) {
      setLoading(false);
      console.error("Failed to fetch menu:", error);
    }
  };

  if (loading) {
    return <ShimmerPostList postStyle="STYLE_FOUR" col={3} row={2} gap={30} />;
  }
  const restaurantInfo = resState?.cards?.[2]?.card?.card?.info;
  const itemCards =
    resState?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card?.itemCards;
  console.log(itemCards);
  if (!restaurantInfo || !itemCards)
    return <h1 className="NoWorking">Data is not Loading</h1>
   ;
  const { name, cuisines = [], costForTwoMessage } = restaurantInfo;

  return (
    <>
      <div className="menu">
        <h1 style={{ fontWeight: "500", margin: "10px" }}>{name}</h1>

        <h2 style={{ fontWeight: "500", margin: "10px" }}>Menu</h2>
        <h3 style={{ fontWeight: "500", margin: "10px" }}>Recommended</h3>
        <ul style={{ margin: 10 }}>
          {itemCards.map((item) => {
            if (!item?.card?.info?.id )  return null; // skip incomplete items
            return (
              <li key={item.card.info.id}>
                {item.card.info.name } - Rs.{(item.card.info.price ?? 0) / 100}
              </li>
            );
          })}
        </ul>
        <p>
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
      </div>
    </>
  );
};

export default ResMenu;

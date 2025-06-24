import React, { useState, useEffect } from "react";
import { ShimmerSectionHeader } from "react-shimmer-effects";
import { ShimmerPostList } from "react-shimmer-effects";
import { useParams } from "react-router-dom";
import MENU_API_URL from "./Utillities/constats";
import Accrodion from "./Accrodion";

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
  console.log(resState?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resState?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);
  if (!restaurantInfo || !itemCards)
    return <h1 className="NoWorking">Data is not Loading</h1>;
  const { name } = restaurantInfo;

  return (
    <>
      <div className="menu">
        <h1 className="text-center font-medium p-1.5 ">{name}</h1>

        <h2 style={{ fontWeight: "500", margin: "10px" }}>Menu</h2>

        {categories.map((category) => (
          <Accrodion
            key={category.card.card.title.itemCards}
            data={category.card.card}
          />
        ))}
      </div>
    </>
  );
};

export default ResMenu;

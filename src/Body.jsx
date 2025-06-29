import React, { useEffect, useState } from "react";
import ResCard from "./ResCard";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  const SWIGGY_API =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.25050&lng=77.40650&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    try {
      const response = await fetch(SWIGGY_API);
      const json = await response.json();

      // Safely accessing nested Swiggy data
      const restaurantData =
        json?.data?.cards?.find(
          (card) => card.card?.card?.id === "restaurant_grid_listing_v2"
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      console.log(restaurantData);
      console.log(allRestaurants);
      setAllRestaurants(restaurantData);
      setFilteredRestaurants(restaurantData);

      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch Swiggy data:", error);
      setLoading(false);
    }
  };

  const handleSearch = () => {
    const filtered = allRestaurants.filter(
      (res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase()) ||
        res.info.cuisines
          .join(", ")
          .toLowerCase()
          .includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filtered);
    ``;
  };

  return (
    <div className="Body">
      <div className="Search ">
        <input
          type="text"
          className="input_container"
          class="p-[50px] gap-1 h-[35px] w-[800px] border-b-neutral-500 ml-[65px] rounded-lg after:ml-0.5 text-gray-600 after:text-red-500 after:content-['*']"
          placeholder="  Search Restaurants"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onClick={handleSearch}
        />
        <span /> <span />
        <button
          class="hover:bg-gray-900 hover:text-amber-50 text-[15px] cursor-pointer border border-black rounded-sm h-9 bg-orange-400  "
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <div className="res_Container">
        {loading ? (
          <>
            {Array(10)
              .fill("")
              .map((_, index) => (
                <div key={index} className="shimmer-card"></div>
              ))}
          </>
        ) : filteredRestaurants.length === 0 ? (
          <p>No restaurants found.</p>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <ResCard
              key={restaurant.info.id}
              resName={restaurant.info.name}
              cuisines={restaurant.info.cuisines.join(", ")}
              avgrating={restaurant.info.avgRating}
              Imgurl={
                "https://media-assets.swiggy.com/swiggy/image/upload/" +
                restaurant.info.cloudinaryImageId
              }
              SlaTime={restaurant.info.sla?.slaString}
              resId={restaurant.info.id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;

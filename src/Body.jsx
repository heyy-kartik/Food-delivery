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
  };

  return (
    <div className="Body">
      <div className="Search gap-6 items-center px-5 py-3 m-4 flex ">
        <input
          type="text"
          className="input_container"
          placeholder="Search Restaurants"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onClick={handleSearch}
        />
        <button
          className="bg-gray-100  w-[120px] h-[40px] border-indigo-300 rounded-lg  hover:bg-black hover:text-white transition-colors duration-300 text-center text-lg font-medium"
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

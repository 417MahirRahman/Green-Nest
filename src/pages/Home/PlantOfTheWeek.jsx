import React from "react";
import tree from "../../assets/peace_lily.jpg";
import star from "../../assets/star.png";

const PlantOfTheWeek = () => {
  return (
    <div className="p-5 md:p-10 lg:p-10 my-15 md:my-20">
      <div className="hero bg-base-300 rounded-xl xl:w-2/3 h-full lg:mx-auto p-2 shadow-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={tree} className="w-full md:max-w-xs rounded-lg shadow-xl md:shadow-2xl" />
          <div className="space-y-3 mt-10 lg:mt-0">
            <h1 className="text-4xl lg:text-6xl font-bold">Plant of the Week</h1>
            <h1 className="text-2xl xl:text-3xl font-bold">Peace Lily</h1>
            <div className="flex items-center">
              <h2 className="text-2xl xl:text-3xl font-bold ">
                Rating: <span className="text-success">4.9</span>
              </h2>
              <img className="w-7 h-auto" src={star} alt="" />
            </div>
            <p className="py-6 text-gray-600 xl:text-lg">
              The Peace Lily is a graceful indoor plant known for its lush green
              leaves and pure white blooms. It doesn’t just add beauty — it
              helps purify the air by removing toxins like ammonia and
              formaldehyde. With minimal care, this plant brings a calm and
              refreshing vibe to any room, symbolizing peace and purity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantOfTheWeek;

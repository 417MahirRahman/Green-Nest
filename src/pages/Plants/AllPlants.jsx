import React from "react";
import { Link, useLoaderData } from "react-router";
import { BsCurrencyDollar } from "react-icons/bs";
import star from "../../assets/star.png"

const AllPlants = () => {
  const plants = useLoaderData();
  return (
    <div className="px-3 py-7 md:p-8">
      <h1 className="text-center text-info-content font-bold text-4xl md:text-5xl mb-5">
        All Plants
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-3 lg:p-5 xl:p-7 gap-10 lg:gap-5 py-5">
        {plants.map((plant) => (
          <div key={plant.plantId} className="card bg-base-100 w-full lg:w-11/12 lg:mx-auto shadow-lg hover:shadow-2xl">
            <figure>
              <img
                className="w-full h-[150px] lg:h-[250px]"
                src={plant.image}
                alt=""
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{plant.plantName}</h2>
              <div className="flex justify-between">
                <div className="flex justify-center items-center">
                  <h1 className="font-semibold text-gray-700">{`Price: ${plant.price}`}</h1>
                  <BsCurrencyDollar />
                </div>
                <div className="flex gap-1 items-center">
                  <h1 className="font-semibold text-gray-700">{`Ratings: ${plant.rating}`}</h1>
                  <img src={star} alt="" />
                </div>
              </div>
              <div className="card-actions">
                <Link to={`/plants/${plant.plantId}`} className="btn bg-[#15803D] text-white rounded">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPlants;

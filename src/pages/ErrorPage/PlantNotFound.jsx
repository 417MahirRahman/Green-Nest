import React from "react";
import plantError from "../../assets/PlantNotFound.jpg";
import { Link } from "react-router";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

const PlantNotFound = () => {
  return (
    <div className="grow bg-white">
      <div className="p-5">
        <h1 className="text-gray-700 font-bold text-3xl lg:text-5xl text-center">
          Opps!!! Plant Not Found
        </h1>
      </div>
      <div className="hero ">
        <div className="hero-content">
          <div className="max-w-2xl">
            <img className="md: w-2xl h-auto rounded-xl" src={plantError} alt="" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-5">
        <Link
          to={"/plants"}
          className="btn bg-[#15803D] text-white rounded border-none"
        >
          Go to Plant Section
        </Link>
      </div>
    </div>
  );
};

export default PlantNotFound;

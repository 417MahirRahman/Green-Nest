import React, { useRef } from "react";
import { Link, useLoaderData } from "react-router";
import { BsCurrencyDollar } from "react-icons/bs";
import star from "../../assets/star.png";

const PlantDetails = () => {
  const plant = useLoaderData();
  const formRef = useRef();

  const handleBookNow = (e) => {
    e.preventDefault();
    formRef.current.reset();
    alert("Successfully Booked");
  };

  return (
    <div className="pt-10">
      <div className="hero justify-center xl:w-3/4 xl:mx-auto">
        <div className="hero-content flex-col lg:flex-row gap-5 xl:gap-15">
          <img
            src={plant.image}
            className="max-w-lg lg:max-w-sm xl:max-w-lg w-4/5 rounded-lg shadow-xl"
          />
          <div className="space-y-2">
            <h1 className="text-3xl xl:text-5xl font-bold">{plant.plantName}</h1>
            <div className="flex items-center">
              <h1 className="font-semibold text-2xl">{`Price: ${plant.price}`}</h1>
              <BsCurrencyDollar className="size-5 lg:size-6" />
            </div>
            <div className="flex gap-1 items-center">
              <h1 className="font-semibold text-2xl">{`Ratings: ${plant.rating}`}</h1>
              <img className="size-5 lg:size-6 h-auto" src={star} alt="" />
            </div>
            <h1 className="font-semibold text-2xl">{`Available: ${plant.availableStock}`}</h1>
            <p className="font-semibold text-[16px] md:text-lg">
              Details:{" "}
              <span className="text-gray-800 font-normal">{`${plant.description}`}</span>
            </p>
            <Link
              to={"/plants"}
              className="btn btn-lg bg-[#15803D] text-white rounded mt-4"
            >
              Back
            </Link>
          </div>
        </div>
      </div>

      <div className="p-3">
        <div className="hero bg-[#166534] w-full lg:w-3/4 mx-auto my-10 p-2 rounded-xl xl:p-10 xl:mt-25 xl:mb-15">
          <div className="hero-content flex-col lg:flex-row-reverse w-full">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold text-white">Book Now!</h1>
            </div>
            <form
              onSubmit={handleBookNow}
              ref={formRef}
              className="card bg-[#15803D] w-full max-w-sm shrink-0 shadow-2xl"
            >
              <div className="card-body">
                <fieldset className="fieldset">
                  <label className="label text-white font-semibold">Name</label>
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="Name"
                    required
                  />

                  <label className="label text-white font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    className="input w-full"
                    placeholder="Email"
                    required
                  />
                  <button className="btn bg-[#FACC15] border-none text-[#15803D] mt-4">
                    Book Now
                  </button>
                </fieldset>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;

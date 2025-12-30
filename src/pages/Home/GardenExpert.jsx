import React from "react";
import { useLoaderData } from "react-router";
import  {motion}  from "motion/react";

const GardenExpert = () => {
  const { experts } = useLoaderData();
  return (
    <div className="bg-[#CFF0DC] p-5">
      <h1 className="text-center text-info-content font-bold text-4xl md:text-5xl my-10">
        Meet Our Green Experts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:w-3/4 lg:mx-auto xl:grid-cols-4 p-3 lg:p-5 xl:p-7 gap-10 lg:gap-5 py-5">
        {experts.map((expert) => (
          <motion.div
            whileHover={{ y: -10, x: 5, scale: 1.05, zIndex: 10 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300 }}
            key={expert.id}
            className="card bg-base-100 w-full gap-10 shadow-sm p-2"
          >
            <figure className="bg-blue-400">
              <img
                className="w-3/5 border-2 border-blue-400 p-2 rounded-full"
                src={expert.image}
                alt=""
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Name: {expert.name}</h2>
              <h3>
                <span className="font-semibold">Specialization:</span>{" "}
                <span className="text-gray-500">{expert.specialization}</span>
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GardenExpert;

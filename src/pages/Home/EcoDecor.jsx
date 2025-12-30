import React from "react";
import { useLoaderData } from "react-router";

const EcoDecor = () => {
  const {plants} = useLoaderData()
  const plant = plants.slice(1,4)
  return (
    <section className="mt-10 mb-25 bg-green-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-center text-info-content font-bold text-4xl md:text-5xl mb-5">
          Eco Decor Ideas
        </h2>
        <p className="text-green-800 text-lg mb-10">
          Discover creative ways to style your home or office with plants.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {plant.map((idea) => (
            <div
              key={idea.plantId}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl"
            >
              <img
                src={idea.image}
                alt={idea.plantName}
                className="w-full h-[150px] lg:h-[250px]"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-900 mb-2">
                  {idea.plantName}
                </h3>
                <p className="text-green-800 text-sm">{idea.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcoDecor;

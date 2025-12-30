import React from "react";
import water from "../../assets/water.png";
import sun from "../../assets/sunlight.png";
import fertilizer from "../../assets/fertilizer.png";

const PlantCare = () => {
  return (
    <div className="bg-[#CFF0DC] p-5">
      <h1 className="text-center text-info-content font-bold text-4xl md:text-5xl my-10">
        Plant Care Tips
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full md:w-3/4 md:mx-auto p-2 place-items-center">
        <div className="card w-full h-full bg-[#FACC15]/80 card-lg shadow-sm">
          <div className="card-body">
            <div className="flex gap-2">
              <h2 className="card-title font-bold text-green-800">Watering</h2>
              <img src={water} alt="" />
            </div>
            <ul className="list-disc space-y-5 font-semibold">
              <li>
                Always water when the top 1 to 2 inches of soil feels dry and
                avoid overwatering
              </li>
              <li>Cold water can shock roots; lukewarm water is best</li>
              <li>
                Empty trays and use pots with drainage holes to prevent root rot
              </li>
            </ul>
          </div>
        </div>

        <div className="card w-full h-full bg-[#FACC15]/80 card-lg shadow-sm">
          <div className="card-body">
            <div className="flex gap-2">
              <h2 className="card-title font-bold text-green-800">Sunlight</h2>
              <img src={sun} alt="" />
            </div>
            <ul className="list-disc space-y-5 font-semibold">
              <li>
                Succulents need bright light; shade-loving plants prefer
                indirect sunlight
              </li>
              <li>Turn your plant every few days for even growth.</li>
              <li>
                Keep delicate leaves away from direct midday sunlight to prevent
                burning.
              </li>
            </ul>
          </div>
        </div>

        <div className="md:col-span-2 lg:col-span-1 justify-self-center card w-full h-full md:w-1/2 lg:w-full bg-[#FACC15]/80 card-lg shadow-sm">
          <div className="card-body">
            <div className="flex gap-2">
              <h2 className="card-title font-bold text-green-800">Fertilizing</h2>
              <img src={fertilizer} alt="" />
            </div>
            <ul className="list-disc space-y-5 font-semibold">
              <li>Fertilize once every 2 to 4 weeks in spring and summer</li>
              <li>
                Always mix fertilizer to half strength to avoid burning roots
              </li>
              <li>
                Most indoor plants rest in winter and don’t need extra nutrients
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantCare;

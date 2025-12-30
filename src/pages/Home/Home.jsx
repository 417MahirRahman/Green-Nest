import React from "react";
import TopPlants from "./TopPlants";
import PlantCare from "./PlantCare";
import GardenExpert from "./GardenExpert";
import HeroSection from "./HeroSection";
import PlantOfTheWeek from "./PlantOfTheWeek";
import EcoDecor from "./EcoDecor";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <PlantOfTheWeek></PlantOfTheWeek>
      <TopPlants></TopPlants>
      <EcoDecor></EcoDecor>
      <PlantCare></PlantCare>
      <GardenExpert></GardenExpert>
    </div>
  );
};

export default Home;

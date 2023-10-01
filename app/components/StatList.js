"use client";
import React, { useEffect, useState } from "react";
import HeroSection from "../app/components/HeroSection";

const HomePage = () => {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    // Fetch hero data from an API or JSON file
    fetch("https://agency.teamrabbil.com/api/StatList")
      .then((response) => response.json())
      .then((data) => setHeroData(data));
  }, []);

  return (
    <div>
      <h1>Home page</h1>
      <HeroSection dynamicData={heroData} />
      {/* Other static sections */}
    </div>
  );
};

export default HomePage;

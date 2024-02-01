import React from "react";
import VideoSection from "./VideoSection";

const HeroSection = () => {
  return (
    <div className="relative h-[50vw]">
      <VideoSection videoKey={videoKey} />
    </div>
  );
};

export default HeroSection;

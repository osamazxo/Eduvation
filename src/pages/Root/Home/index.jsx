import { Box } from "@mui/material";
import React from "react";
import HeroSection from "./components/HeroSection";
import TopAdverisement from "./components/TopAdvertisement";
import WorkshopOverview from "./components/WorkshopOverview";
import RecommendedCourses from "./components/RecommendedCourses";
import FocusGroupsOverview from "./components/FocusGroupsOverview";
import Footer from "Components/Footer/Footer";
import TopWorkshops from "./components/TopWorkshops";

const Home = () => {
  return (
    <Box>
      <TopAdverisement />
      <HeroSection />
      <WorkshopOverview />
      <RecommendedCourses />
      <FocusGroupsOverview />
      <TopWorkshops />
      <Footer />
    </Box>
  );
};

export default Home;

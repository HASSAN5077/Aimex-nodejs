import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Loader from "../components/Loader";
import NftSection from "../components/NftSection";
import { signinBg } from "../images";

const Home = () => {
  return (
    <div>
      <Banner />
      <NftSection />
    </div>
  );
};

export default Home;

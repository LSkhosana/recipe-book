import React from "react";
//import BannerBackground from "../Assets/home-banner-background.png";
import Noodlebowl from  "../Assets/noodle bowl.webp"
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          {/* <img src={BannerBackground} alt="" /> */}
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            About Us
          </h1>
          <p className="primary-text">
          Welcome to Foodie, your ultimate destination for delicious and effortless dinner recipes! At Foodie, we believe that cooking shouldn't be complicated. Our mission is to empower home cooks of all skill levels to create mouthwatering meals without stress or hassle.
          </p>
          <button className="secondary-button">
            <Link to="/ingredients">Recipes <FiArrowRight /></Link>
          </button>
        </div>
        <div className="home-image-section">
        <img src={Noodlebowl} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
//import PickMeals from "../Assets/pick-meals-image.png";
//import ChooseMeals from "../Assets/choose-image.png";
//import DeliveryMeals from "../Assets/delivery-image.png";
import Roast from "../Assets/roast.jpg"
import Roti from "../Assets/roti.webp"
import Spaghetti from "../Assets/spaghetti.jpg"
import Curry from "../Assets/spicy-chicken-curry.jpg"
import Chef from "../Assets/chef.webp";


const Work = () => {
  const workInfoData = [
    {
      image: Roast,
      title: "Roast Chicken",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: Roti,
      title: "Roti",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
    {
      image: Curry,
      title: "Chicken Curry",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
    {
      image: Spaghetti,
      title: "Spaghetti",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: Chef,
      title: "Fast And Easy",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
    
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Recipes</p>
        <h1 className="primary-heading">The Dinner Guide</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;

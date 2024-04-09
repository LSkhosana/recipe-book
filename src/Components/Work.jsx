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
      image: Curry,
      title: "Chicken Curry",
      text: "Indulge in the irresistible allure of our chicken curry, a flavor-packed delight that is loved by many",
    },
    {
      image: Roti,
      title: "Roti",
      text: "Savor the simple yet satisfying pleasure of freshly made roti—soft, flaky, and utterly delicious",
    },
    {
      image: Roast,
      title: "Roast Chicken",
      text: "Indulge in succulent roast chicken infused with aromatic herbs and spices.",
    },
    {
      image: Spaghetti,
      title: "Spaghetti",
      text: "Fall in love with the timeless comfort of spaghetti Bolognese—al dente pasta. ",
    },
    {
      image: Chef,
      title: "Fast And Easy",
      text: "Our reciepes are simple, cost effective and super easy to follow, Lets get cooking!",
    },
    
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Recipes</p>
        <h1 className="primary-heading">The Dinner Guide</h1>
        <p className="primary-text">
        From cozy comfort foods to exotic culinary adventures, embark on a gastronomic journey that
         promises to delight, making every dinner a memorable occasion.
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

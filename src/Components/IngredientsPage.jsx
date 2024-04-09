import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import './IngredientsPage.css';
import BackArrow from "../Assets/back-arrow-icon.webp"



const IngredientsPage = () => {
  return (
    <div className="ingredients-page">
     <div className="arrows">
        <a href="/">
          <img src={BackArrow} alt="Back" style={{ width: '150px', height: '50px' }} />
        </a>
      </div>
      <div className="food-details">
        <h1 className="food-title">Indian Chicken Curry</h1>
        <img src="https://www.recipetineats.com/wp-content/uploads/2023/10/African-coconut-chicken-curry_3.jpg" alt="Food" className="food-picture" />
        <div className="food-info">
          <p className="food-description1">This Indian-inspired creamy chicken curry recipe is similar to a curry I had in India.
            <br /> The aromatic spices and flavors are a delight to the senses! Delicious with fresh naan and basmati rice.</p>
            <div className="recipe-details"> 
        {/* <div className="recipe-container"> */}
        
          <div className="recipe-content">
           
              <h3 className="food-sub-title">What Is Indian Chicken Curry?</h3>
              <p className="food-description">Chicken curry from the Indian subcontinent typically features chicken stewed in a tomato-based sauce seasoned with aromatic spices. This recipe, like many others, calls for curry powder (a spice blend made with coriander, turmeric, cumin, and chili powder).</p>
              <div className="recipe-header">
            <div className="actions">
              <button className="share-button">Share</button>
              <div className="rating">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9734;</span>
              </div>
              <button className="print-button" onClick={() => window.print()}>Print</button>
            </div>
          </div>

              <h3 className="food-title-directions">Directions</h3>

              <h4 className="food-step-tittle" >Step 1</h4>
          <img src="https://www.allrecipes.com/thmb/qzdbBSNBpBcAkX9YThssZ21ya4s=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/46822-Indian-Chicken-Curry-step-1-103232-e2ee06726c3e4555aa7a5ae3d96cc47d.jpg" alt="Food" className="food-picture" />
          <p className="food-steps">Heat olive oil in a skillet over medium heat. Sauté onion until lightly browned.</p>


          <h4 className="food-step-tittle" >Step 2</h4>
          <img src="https://www.allrecipes.com/thmb/hRd-iiakCNWgwZUWg2yfaiOFXsM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/46822-Indian-Chicken-Curry-step-2-103239-5d895662cfeb4540ba6ae2b2ede841e6.jpg" alt="Food" className="food-picture" />
          <p className="food-steps">Stir in garlic, curry powder, cinnamon, paprika, bay leaf, ginger, sugar, and salt. Continue stirring for 2 minutes.</p>


          <h4 className="food-step-tittle" >Step 3</h4>
          <img src="https://www.allrecipes.com/thmb/GMlc_A_5OuRXIScMyqrlRLq-WRQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/46822-Indian-Chicken-Curry-step-3-103245-f78c0ef54ca84642b4341a30da1e4967.jpg" alt="Food" className="food-picture" />
          <p className="food-steps">Add chicken pieces, tomato paste, yogurt, and coconut milk. Bring to a boil, reduce heat, and simmer for 20 to 25 minutes.</p>


          <h4 className="food-step-tittle" >Step 4</h4>
          <img src="https://www.allrecipes.com/thmb/KwDt4BhqVTme98yfkQ56wJuY8z8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/46822-Indian-Chicken-Curry-step-4-103267-749f3ad7a23b46cd90c35af9d343995a.jpg" alt="Food" className="food-picture" />
          <p className="food-steps">Remove bay leaf, and stir in lemon juice and cayenne pepper. Simmer 5 more minutes.</p>


          <h4 className="food-step-tittle" >Step 5</h4>
          <img src="https://www.allrecipes.com/thmb/LKqx8TCWN6lxuLZKne8sZRtSFJs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/46822-indian-chicken-curry-ii-DDMFS-4x3-39160aaa95674ee395b9d4609e3b0988.jpg" alt="Food" className="food-picture" />
          <p className="food-steps">Serve hot and enjoy!</p>
          </div>



           
          </div>
        </div>
      </div>

     

        

        <div className="ingredients-section">
          <h2 className='ingredients-title'>Ingredients</h2>
          <ul className="ingredients-list">
            <li>3 tablespoons olive oil</li>
            <li>1 small onion, chopped</li>
            <li>2 cloves garlic, minced</li>
            <li>3 tablespoons curry powder</li>
            <li>1 teaspoon ground cinnamon</li>
            <li>1 teaspoon paprika</li>
            <li>½ teaspoon grated fresh ginger root</li>
            <li>½ teaspoon white sugar</li>
            <li>salt to taste</li>
            <li>2 skinless, boneless chicken breast halves - cut into bite-size pieces</li>
            <li>1 tablespoon tomato paste</li>
            <li>1 cup plain yogurt</li>
            <li>¾ cup coconut milk</li>
            <li>½ lemon, juiced</li>
            <li>½ teaspoon cayenne pepper</li>
          </ul>

          <div className="time-section">
            <div className='tyd'>
            <h2 className='time'><FontAwesomeIcon icon={faClock} /> Cook Time</h2>
            <p className='time-content'>25 mins</p>
            </div>
            <div className='tyd'>
            <h2 className='time'><FontAwesomeIcon icon={faClock} /> Prep Time</h2>
            <p className='time-content'>20 mins</p>
            </div>
            <div className='tyd'>
            <h2><FontAwesomeIcon icon={faClock} /> Total Time</h2>
            <p>45 mins</p>
            </div>
          </div>

          <div className="youtube-section">
            <h2 >YouTube Tutorial</h2>
            <iframe width="560"
              height="315"
              src="https://www.youtube.com/embed/jwyge5daKUQ?si=7Kv6_eLPA7fszO8S"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
  
    
  );
}

export default IngredientsPage;

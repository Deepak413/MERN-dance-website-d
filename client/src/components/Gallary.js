import React from 'react';
import '../components/Home.css';
import gallarypic1 from '../images/gallary2.jpg';
import gallarypic2 from '../images/gallary1.jpg';
import gallarypic3 from '../images/gallary3.jpg';
import gallarypic4 from '../images/gallary4.jpg';
import gallarypic5 from '../images/gallary6.jpg';
import gallarypic6 from '../images/gallary5.jpg';
import gallarypic7 from '../images/gallary7.jpg';
import gallarypic8 from '../images/gallary8.jpg';

const Gallary = () => {
  return (
    <>
      <div className="home_gallary_heading">
        Our Gallary
      </div>
      <div className="home_gallary">
        <div className="home_gallary_container">
          <img src={gallarypic1} alt="pic1" />
          <img src={gallarypic2} alt="pic2" />
        </div>
        <div className="home_gallary_container">
          <img src={gallarypic3} alt="pic3" />
          <img src={gallarypic4} alt="pic4" />
        </div>
        <div className="home_gallary_container">
          <img src={gallarypic5} alt="pic5" />
          <img src={gallarypic6} alt="pic6" />
          <img src={gallarypic1} alt="pic1" />
        </div>
        <div className="home_gallary_container">
          <img src={gallarypic7} alt="pic7" />
          <img src={gallarypic8} alt="pic8" />
        </div>
      </div>
    </>
  )
}

export default Gallary;
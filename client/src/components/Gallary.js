import React from 'react';
import '../components/Home.css';
// import gallarypic1 from '../images/gallary2.jpg';
// import gallarypic2 from '../images/gallary1.jpg';
// import gallarypic3 from '../images/gallary3.jpg';
// import gallarypic4 from '../images/gallary4.jpg';
// import gallarypic5 from '../images/gallary6.jpg';
// import gallarypic6 from '../images/gallary5.jpg';
// import gallarypic7 from '../images/gallary7.jpg';
// import gallarypic8 from '../images/gallary8.jpg';

const Gallary = () => {
  const gallary1Url = "https://res.cloudinary.com/dcdu1cisn/image/upload/v1723326004/dance%20website%20pics/gallary1_gckpqv.jpg";
  const gallary2Url = "https://res.cloudinary.com/dcdu1cisn/image/upload/v1723326003/dance%20website%20pics/gallary2_kkbuvg.jpg";
  const gallary3Url = "https://res.cloudinary.com/dcdu1cisn/image/upload/v1723327872/dance%20website%20pics/gallary3_iwl9w2.jpg";
  const gallary4Url = "https://res.cloudinary.com/dcdu1cisn/image/upload/v1723327866/dance%20website%20pics/gallary4_qehteu.jpg";
  const gallary5Url = "https://res.cloudinary.com/dcdu1cisn/image/upload/v1723327867/dance%20website%20pics/gallary5_pqnu8v.jpg";
  const gallary6Url = "https://res.cloudinary.com/dcdu1cisn/image/upload/v1723327867/dance%20website%20pics/gallary6_t3fco3.jpg";
  const gallary7Url = "https://res.cloudinary.com/dcdu1cisn/image/upload/v1723327867/dance%20website%20pics/gallary7_ejmjre.jpg";
  const gallary8Url = "https://res.cloudinary.com/dcdu1cisn/image/upload/v1723327984/dance%20website%20pics/pricingHome_r0t9fq.jpg";
  return (
    <>
      <div className="home_gallary_heading">
        Our Gallary
      </div>
      <div className="home_gallary">
        <div className="home_gallary_container">
          <img src={gallary1Url} alt="pic1" />
          <img src={gallary2Url} alt="pic2" />
        </div>
        <div className="home_gallary_container">
          <img src={gallary3Url} alt="pic3" />
          <img src={gallary4Url} alt="pic4" />
        </div>
        <div className="home_gallary_container">
          <img src={gallary5Url} alt="pic5" />
          <img src={gallary6Url} alt="pic6" />
          <img src={gallary1Url} alt="pic1" />
        </div>
        <div className="home_gallary_container">
          <img src={gallary7Url} alt="pic7" />
          <img src={gallary8Url} alt="pic8" />
        </div>
      </div>
    </>
  )
}

export default Gallary;
import React from 'react';
// import pricingHome from '../images/pricingHome.jpg';
import '../components/Pricing.css';

const Pricing = () => {
  const backgroundImageUrl = "https://res.cloudinary.com/dcdu1cisn/image/upload/v1723327984/dance%20website%20pics/pricingHome_r0t9fq.jpg";
  return (
    <>
      <section id="pricing_landing_page" style={{backgroundImage: `url(${backgroundImageUrl})`}}>
        <div className="pricing_page_container">
          <h5>Explore the Very Affordable Dance Classes Near You</h5>
          <h3>Check Out Prices</h3>
        </div>
      </section>

      <div className="price_container">
        <h1>Pricing Packages</h1>
        <div className="price_box_container">
          <div className="price_box">
            <div className="price_box_heading">
              BASIC
            </div>
            <div className="price_box_value">
              <h1> <span>$</span> 15</h1>
            </div>
            <p>1 Personal Lesson</p>
            <p>3 Group Lessons</p>
            <p>5 Workshops</p>
            <p>Free First Lesson</p>
            <button className='price_box_button'>BUY NOW</button>
          </div>
          <div className="price_box">
            <div className="price_box_heading">
              STANDARD
            </div>
            <div className="price_box_value">
              <h1> <span>$</span> 39</h1>
            </div>
            <p>3 Personal Lesson</p>
            <p>10 Group Lessons</p>
            <p>8 Workshops</p>
            <p>3 Free Lesson</p>
            <button className='price_box_button price_box_stndrdbutton'>BUY NOW</button>
          </div>
          <div className="price_box">
            <div className="price_box_heading">
              PREMIUM
            </div>
            <div className="price_box_value"><h1><span>$</span>70</h1></div>
            <p>8 Personal Lesson</p>
            <p>15 Group Lessons</p>
            <p>15 Workshops</p>
            <p>5 Free Lesson</p>
            <button className='price_box_button'>BUY NOW</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pricing;
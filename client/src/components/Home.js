import React from 'react';
import homeimg from '../images/home.jpg';
import '../components/Home.css';
import Gallary from './Gallary';
import homelesson from '../images/homebg.jpg';

const Home = () => {
  return (
    <>
      <section id="home_landing_page" style={{backgroundImage: `url(${homeimg})`}}>
        <div className="home_page_container">
          <h5>Explore the Dance Lifestyle And Learn More About Our Community</h5>
          <h1>JUST DANCE ACADEMY</h1>
          <button>Learn More</button>
        </div>
      </section>

      <div className="home_container1">
        <div className="home_container1_card">
          <div className='home_container1_cardicon'><i className="zmdi zmdi-account-o"></i></div>
          <div className="home_container1_cardtitle">Personal Training</div>
          <div className="home_container1_cardtext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem?</div>   
        </div>
        <div className="home_container1_card">
          <div className='home_container1_cardicon'><i className="zmdi zmdi-group-work"></i></div>
          <div className="home_container1_cardtitle">Group Training</div>
          <div className="home_container1_cardtext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem?</div>   
        </div>
        <div className="home_container1_card">
          <div className='home_container1_cardicon'><i className="zmdi zmdi-filter-b-and-w"></i></div>
          <div className="home_container1_cardtitle">Dance Workshop</div>
          <div className="home_container1_cardtext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem?</div>   
        </div>
      </div>

      <Gallary />

      <div className="home_lesson_book" style={{backgroundImage: `url(${homelesson})`}}>
        <div className="home_lesson_book_container">
          <h1>Take Your First Dance Lesson for Free</h1>
          <button>BOOK A LESSON</button>
        </div>
      </div>
    </>
  );
};

export default Home;
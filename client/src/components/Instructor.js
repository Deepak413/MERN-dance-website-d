import React from 'react';
import instructorHome from '../images/instructorHome.jpg';
import '../components/Instructor.css';
import coach1 from '../images/coach1.jpg';
import coach2 from '../images/coach2.jpg';
import coach3 from '../images/coach3.jpg';
import coach4 from '../images/coach4.jpg';
import coach5 from '../images/coach5.jpg';
import coach6 from '../images/coach6.jpg';

const Instructor = () => {
  return (
    <>
      <section id="coach_landing_page" style={{backgroundImage: `url(${instructorHome})`}}>
        <div className="coach_page_container">
          <h5>Get Ready To Learn From Most Finest Dancers</h5>
          <h3>See Who We Are</h3>
        </div>
      </section>

      <div className="coach_container">
        <h1>Instructors</h1>
        <div className="coach_box_container">

          <div className="coach_box">
            <img src={coach1} alt="coach 1" />
            <h2 className='coach_heading'>Shree Devi</h2>
            <p className='coach_desc'>Founder, Senior Instructor</p>
          </div>
          <div className="coach_box">
            <img src={coach2} alt="coach 2" />
            <h2 className='coach_heading'>Steve Jobs</h2>
            <p className='coach_desc'>Co-Founder, Senior Instructor</p>
          </div>
          <div className="coach_box">
            <img src={coach3} alt="coach 3" />
            <h2 className='coach_heading'>Kate Anderson</h2>
            <p className='coach_desc'>Dance Instructor, Latin</p>
          </div>
          <div className="coach_box">
            <img src={coach4} alt="coach 4" />
            <h2 className='coach_heading'>Richard Jobs</h2>
            <p className='coach_desc'>Dance Instructor, Hip-Hop</p>
          </div>
          <div className="coach_box">
            <img src={coach5} alt="coach 1" />
            <h2 className='coach_heading'>Romei Dsuza</h2>
            <p className='coach_desc'>Dance Instructor, Indian</p>
          </div>
          <div className="coach_box">
            <img src={coach6} alt="coach 1" />
            <h2 className='coach_heading'>Shakti Sinha</h2>
            <p className='coach_desc'>Dance Instructor, Urban</p>
          </div>
          

        </div>
      </div>

    </>
  )
}

export default Instructor;
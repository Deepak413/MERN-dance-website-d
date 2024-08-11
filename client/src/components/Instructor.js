import React from 'react';
// import instructorHome from '../images/instructorHome.jpg';
import '../components/Instructor.css';
// import coach1 from '../images/coach1.jpg';
// import coach2 from '../images/coach2.jpg';
// import coach3 from '../images/coach3.jpg';
// import coach4 from '../images/coach4.jpg';
// import coach5 from '../images/coach5.jpg';
// import coach6 from '../images/coach6.jpg';

const Instructor = () => {
  const backgroundImageUrl = "https://res.cloudinary.com/dcdu1cisn/image/upload/v1723327869/dance%20website%20pics/instructorHome_thpwcd.jpg";
  const coach1url = "https://res.cloudinary.com/dcdu1cisn/image/upload/v1723327864/dance%20website%20pics/coach1_yuii9a.jpg";
  const coach2url = "https://res.cloudinary.com/dcdu1cisn/image/upload/v1723327865/dance%20website%20pics/coach2_twl84s.jpg";
  const coach3url = "https://res.cloudinary.com/dcdu1cisn/image/upload/v1723327865/dance%20website%20pics/coach3_htuzdy.jpg";
  const coach4url = "https://res.cloudinary.com/dcdu1cisn/image/upload/v1723327865/dance%20website%20pics/coach4_m7hwhp.jpg";
  const coach5url = "https://res.cloudinary.com/dcdu1cisn/image/upload/v1723327865/dance%20website%20pics/coach5_x3usho.jpg";
  const coach6url = "https://res.cloudinary.com/dcdu1cisn/image/upload/v1723327866/dance%20website%20pics/coach6_ijznih.jpg";
  return (
    <>
      <section id="coach_landing_page" style={{backgroundImage: `url(${backgroundImageUrl})`}}>
        <div className="coach_page_container">
          <h5>Get Ready To Learn From Most Finest Dancers</h5>
          <h3>See Who We Are</h3>
        </div>
      </section>

      <div className="coach_container">
        <h1>Instructors</h1>
        <div className="coach_box_container">

          <div className="coach_box">
            <img src={coach1url} alt="coach 1" />
            <h2 className='coach_heading'>Shree Devi</h2>
            <p className='coach_desc'>Founder, Senior Instructor</p>
          </div>
          <div className="coach_box">
            <img src={coach2url} alt="coach 2" />
            <h2 className='coach_heading'>Steve Jobs</h2>
            <p className='coach_desc'>Co-Founder, Senior Instructor</p>
          </div>
          <div className="coach_box">
            <img src={coach3url} alt="coach 3" />
            <h2 className='coach_heading'>Kate Anderson</h2>
            <p className='coach_desc'>Dance Instructor, Latin</p>
          </div>
          <div className="coach_box">
            <img src={coach4url} alt="coach 4" />
            <h2 className='coach_heading'>Richard Jobs</h2>
            <p className='coach_desc'>Dance Instructor, Hip-Hop</p>
          </div>
          <div className="coach_box">
            <img src={coach5url} alt="coach 1" />
            <h2 className='coach_heading'>Romei Dsuza</h2>
            <p className='coach_desc'>Dance Instructor, Indian</p>
          </div>
          <div className="coach_box">
            <img src={coach6url} alt="coach 1" />
            <h2 className='coach_heading'>Shakti Sinha</h2>
            <p className='coach_desc'>Dance Instructor, Urban</p>
          </div>
          

        </div>
      </div>

    </>
  )
}

export default Instructor;
import React, { useEffect, useState } from 'react';
// import aboutme from '../images/aboutme.jpg';
import './About.css';
import {useNavigate} from 'react-router-dom';

const About = () => {
  const aboutmeurl = "https://res.cloudinary.com/dcdu1cisn/image/upload/v1723327863/dance%20website%20pics/aboutme_voqphb.jpg";

  const navigate = useNavigate();
  const [userData, setUserData] = useState({});  //to set the data in profile

  const callAboutPage = async () => {
    try {
      const res = await fetch('https://justdance.onrender.com/about', {
        method:"GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials:"include"           //to send cookies to backend also
      });

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      const data = await res.json();
      console.log(data);
      setUserData(data);


    } catch (err) {
      console.log("callAboutPage func gives error");
      console.log(err);
      navigate('/login');
    }
  }

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <>
      <div className="container emp_profile">
        <form method='GET'>
          <div className="row first_row">
            <div className="col-md-4 aboutme_img_container">
              <img src={aboutmeurl} alt="Employee" />
            </div>
            <div className="col-md-6">
              <div className="profile_head">
                <h5> { userData.name } </h5>
                <h6>Software Developer</h6>
                <p className='profile_rating mt-4 mb-5'>RANKING: <span>1/10</span> </p>

                <ul className="nav nav-tabs " role='tablist'>
                  <li className="active"><a className="nav-link active" aria-current="page" id='home-tab' data-toggle="tab" href="#home" role='tab'>About</a></li>
                  <li><a className="nav-link" aria-current="page" id='profile-tab' data-toggle="tab" href="#profile" role='tab'>Timeline</a></li>
                </ul>

              </div>
            </div>
            <div className="col-md-2">
              <input type="text" className='profile_edit_btn' name='btnAddMore' value="Edit Profile" />
            </div>

          </div>

          <div className="row second_row">
            {/* LEFT SIDE URLs */}
            <div className="col-md-4">
              <div className="profile_work">
                <p>WORK LINK</p>
                <a href="https://www.youtube.com/" target='_deepak'>Youtube</a><br />
                <a href="youtube.com" target='_deepak'>Instagram</a><br />
                <a href="youtube.com" target='_deepak'>Twitter</a><br />
                <a href="youtube.com" target='_deepak'>Facebook</a><br />
                <a href="youtube.com" target='_deepak'>Linked In</a><br />
                <a href="youtube.com" target='_deepak'>LeetCode</a><br />
                <a href="youtube.com" target='_deepak'>CodeChef</a><br />
              </div>
            </div>

            {/* RIGHT SIDE DATA-TOGGLES */}
            <div className="col-md-8 ps-5 about_info">
              <div className="tab-content profile-tab" id='myTabContent'>
                {/* About toggled content */}
                <div className="tab-pane fade show active profile_tabs" id='home' role='tabpanel' aria-labelledby='home-tab'>
                  <div className="row">
                    <div className="col-md-6">
                      <label>User ID</label>
                    </div>
                    <div className="col-md-6">
                      <label>{userData._id}</label>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <label> { userData.name } </label>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <label> { userData.email } </label>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Phone</label>
                    </div>
                    <div className="col-md-6">
                      <label> { userData.phone } </label>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Profession</label>
                    </div>
                    <div className="col-md-6">
                      <label>Engineer</label>
                    </div>
                  </div>
                </div>

                {/* timeline toggled content */}
                <div className="tab-pane fade profile_tabs" id='profile' role='tabpanel' aria-labelledby='profile-tab'>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Experience</label>
                    </div>
                    <div className="col-md-6">
                      <label>Expert</label>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Hourly Rate</label>
                    </div>
                    <div className="col-md-6">
                      <label>10$/hr</label>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Total Projects</label>
                    </div>
                    <div className="col-md-6">
                      <label>230</label>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>English Level</label>
                    </div>
                    <div className="col-md-6">
                      <label>Expert</label>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Availability</label>
                    </div>
                    <div className="col-md-6">
                      <label>6 months</label>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </form >
      </div >
    </>
  );
};

export default About;
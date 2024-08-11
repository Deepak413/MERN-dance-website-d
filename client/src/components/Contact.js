import React, { useEffect, useState } from 'react';
import './Contact.css';

const Contact = () => {

  const [userData, setUserData] = useState({name:"", email:"", phone:"", message:""});  //to set the data in profile

  const userContact = async () => {
    try {
      const res = await fetch('https://justdance.onrender.com/getdata', {
        method:"GET",
        headers: {
          "Content-Type": "application/json"
        },
      });

      // if (!res.ok) {
      //   throw new Error(`Request failed with status ${res.status}`);
      // }

      const data = await res.json();
      console.log(data);
      setUserData({ ...userData, name:data.name, email:data.email, phone:data.phone });


    } catch (err) {
      console.log("userContact func gives error");
      console.log(err);
    }
  }

  useEffect(() => {
    userContact();
  }, []);

  //we are storing data in states
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [name]:value });
  }

  //sending the data to backend
  const sendContactFormData = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = userData;

    const res = await fetch('https://justdance.onrender.com/contact', {
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, phone, message })
    });

    const data = await res.json();
    console.log(data);

    if(!res.ok){
      console.log("message not sent");
    } else {
      console.log("message sent");
      window.alert("message sent");
      setUserData({ ...userData, message:"" });
    }

  }

  return (
    <>
      <div className="contact_info">
        <div className="contact_container">
          <div className="contact_info_item">
            <span><i className="zmdi zmdi-smartphone-android"></i></span>
            <div className="contact_info_content">
              <div className="contact_info_title">Phone</div>
              <div className="contact_info_text">+919928300000</div>
            </div>
          </div>
          <div className="contact_info_item">
            <span><i className="zmdi zmdi-email"></i></span>
            <div className="contact_info_content">
              <div className="contact_info_title">Email</div>
              <div className="contact_info_text">deepak***@gmail.com</div>
            </div>
          </div>
          <div className="contact_info_item">
            <span><i className="zmdi zmdi-home"></i></span>
            <div className="contact_info_content">
              <div className="contact_info_title">Address</div>
              <div className="contact_info_text">Kota, Rajasthan, 311602</div>
            </div>
          </div>

        </div>
      </div>

      {/* CONTACT US FORM */}

      <div className="contact_form">
        <div className="container">
          <div className="contact_form_container">
            <h2 className='contact_form_title'>Get in Touch</h2>
            <form method='POST' id='contact_form'>
              
              <div className='contact_form_name'>
                <input type="text" name='name' 
                  id="contact_form_name" 
                  className='contact_form_name contact_input_field' 
                  placeholder='Enter Name'
                  onChange={handleInputs} value={userData.name} />

                <input type="email" name='email' 
                  id="contact_form_email" 
                  className='contact_form_email contact_input_field' 
                  placeholder='Enter Email'
                  onChange={handleInputs} 
                  value={userData.email} />

                <input type="number" name='phone' 
                  id="contact_form_phone" 
                  className='contact_form_phone contact_input_field' 
                  placeholder='Enter Phone'
                  onChange={handleInputs} 
                  value={userData.phone} />

              </div>
              
              <div className="contact_form_textarea mt-4">
                <textarea name='message' 
                  className='textarea_field contact_form_message' 
                  onChange={handleInputs} value={userData.message} 
                  placeholder='Wanna join us...type here' id=""></textarea>
              </div>

              <div className="contact_form_button">
                <button type='submit' 
                  className='button contact_submit_button'
                  onClick={sendContactFormData}>Send Message</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
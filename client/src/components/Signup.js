import React, {useState } from 'react';
import './Signup.css';
// import signupPic from '../images/signupPic.png';
import { NavLink} from 'react-router-dom';


const Signup = () => {

  const signupPicurl = "https://res.cloudinary.com/dcdu1cisn/image/upload/v1723327984/dance%20website%20pics/signupPic_gkwo9w.png";


  // const history = useHistory();

  const [user, setUser] = useState({
    name:"",
    email:"",
    phone:"",
    age:"",
    password:"",
    cpassword:""
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e.target.value);
    name = e.target.name;
    value = e.target.value;

    setUser({...user, [name]:value});
  }

  const PostData = async(e) => {
    e.preventDefault();     //prevent form from automatic reload behaviour

    const { name, email, phone, age, password, cpassword } = user;

    const res = await fetch("https://justdance.onrender.com/register", {
      method: "POST",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify({        //bcz server doesnt understand JSON data
        name, email, phone, age, password, cpassword
      })
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const data = await res.json();
    if(res.status === 422|| !data){
      window.alert("Invalid registration");
      console.log("Invalid registration");
    } 
    else {
      window.alert("Registration Successful");
      console.log("Registration Successful");
    }

    // history.push("/login");
    

  }

  return (
    <>
      <section className='signup'>
        <div className="signup_container">
          <div className="signup_content">
            <div className="signup_form">
              <h2 className='form_title'>Sign Up</h2>
              <form method="POST" className='register_form' id='register_form'>
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account"></i>
                  </label>
                  <input type="text" name='name' className="form-control" id="name" autoComplete='off' 
                      value={user.name}
                      onChange={handleInputs}
                      placeholder="Enter Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email"></i>
                  </label>
                  <input type="email" name='email' className="form-control" id="email" autoComplete='off' 
                      value={user.email}
                      onChange={handleInputs}
                      placeholder="Enter Email" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">
                    <i className="zmdi zmdi-phone"></i>
                  </label>
                  <input type="number" name='phone' className="form-control" id="phone" autoComplete='off' 
                      value={user.phone}
                      onChange={handleInputs}
                      placeholder="Enter Phone" />
                </div>
                <div className="form-group">
                  <label htmlFor="age">
                    <i className="zmdi zmdi-walk"></i>
                  </label>
                  <input type="number" name='age' className="form-control" id="age" autoComplete='off' 
                      value={user.age}
                      onChange={handleInputs}
                      placeholder="Enter Your Age" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock"></i>
                  </label>
                  <input type="password" name='password' className="form-control" id="password" autoComplete='off' 
                      value={user.password}
                      onChange={handleInputs}
                      placeholder="Enter Your Password" />
                </div>
                <div className="form-group">
                  <label htmlFor="cpassword">
                    <i className="zmdi zmdi-lock"></i>
                  </label>
                  <input type="password" name='cpassword' className="form-control" id="cpassword" autoComplete='off' 
                      value={user.cpassword}
                      onChange={handleInputs}
                      placeholder="Confirm Your Password" />
                </div>

                <div className="form-group form-button">
                  <input type="submit" name='signup' className="form-control form_submit" id="signup" value='Register' onClick={PostData} />
                </div>
                
                <NavLink to='/login' className="signup_image_link">I am already registered</NavLink>
              </form>
            </div>

            <div className="signup_image">
              <figure>
                <img src={signupPicurl} alt="Registration pic" />
              </figure>
            </div>

          </div>
        </div>
      </section>






    </>

  )
}

export default Signup
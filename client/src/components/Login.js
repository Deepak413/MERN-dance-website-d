import React, {useContext, useState} from 'react';
import './Login.css';
import loginPic from '../images/loginPic.png'
import { NavLink, useNavigate } from 'react-router-dom';

import { UserContext } from '../App';

const Login = () => {

  // const { state, dispatch} = useContext(UserContext);
  const { dispatch} = useContext(UserContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async(e) => {
    e.preventDefault();

    const res = await fetch('/signin', {
      method: "POST",
      headers: {
        "Content-type" : "application/json"
      },
      body: JSON.stringify({        //bcz server doesnt understand JSON data
        email, password
      })
    })

    const data = await res.json();
    if(res.status === 400 || !data){
      window.alert("Invalid credentials");      //this not showing but data successfully storeed 
      console.log("Invalid credentials");
    } 
    else {
      dispatch({type:"USER", payload:true})
      window.alert("Login Successful");
      console.log("Login Successful");
      navigate("/");
    }


  }

  return (
    <>
      <section className='login'>
        <div className="login_container">
          <div className="login_content">
            <div className="login_image">
              <figure>
                <img src={loginPic} alt="Login pic" />
              </figure>
            </div>

            <div className="login_form_container">
              <h2 className='form_title'>Sign In</h2>
              <form method='POST' className='login_form' id='login_form'>
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email"></i>
                  </label>
                  <input type="email" name='email' className="form-control" id="email" autoComplete='off' value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Your Email" />
                </div>

                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock"></i>
                  </label>
                  <input type="password" name='password' className="form-control" id="password" autoComplete='off' 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Enter Your Password" />
                </div>

                <div className="form-group form-button">
                  <input type="submit" name='signin' className="form-control form_submit" id="signin" value='Log In' onClick={loginUser} />
                </div>
                <div className="login_option">
                  <span>Or login with </span>
                  <NavLink to='https://www.facebook.com/' className="login_icon_link fb_icon"><i className="zmdi zmdi-facebook"></i></NavLink>
                  <NavLink to='https://www.twitter.com/' className="login_icon_link twitter_icon"><i className="zmdi zmdi-twitter"></i></NavLink>
                  <NavLink to='https://www.google.com/' className="login_icon_link google_icon"><i className="zmdi zmdi-google"></i></NavLink>
                </div>
                <NavLink to='/signup' className="login_image_link">Create an account</NavLink>
              </form>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}

export default Login;

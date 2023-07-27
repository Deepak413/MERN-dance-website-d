import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo2.png';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer_container">
                    <div className="footer_container_left">
                        <NavLink to="/">JUST
                            <img className='logoimg h-56 w-54' src={logo} alt="logo" /> DANCE
                        </NavLink>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consectetur sapiente sequi ipsum suscipit quo iure corrupti nesciunt unde excepturi incidunt enim, neque inventore fugiat, hic voluptates! Eveniet, quo obcaecati.</p>
                    </div>
                    <div className="footer_container_right">
                        <div className="footer_mail_container">
                            <h5>SUBSCRIBE AND STAY UPDATED</h5>
                            <input type="email" placeholder='E-mail' />
                            <button>SUBSCRIBE</button>
                        </div>
                        <div className="footer_info_container">
                            <div className="footer_address_detail">
                                <h5>ADDRESS & PHONE</h5>
                                <div className="footer_address_card">
                                    <div className="footer_address_cardicon"><i class="zmdi zmdi-pin"></i></div>
                                    <div className="footer_address_cardtext">52, Chand Street, Mumbai 311602</div>
                                </div>
                                <div className="footer_address_card">
                                    <div className="footer_address_cardicon"><i class="zmdi zmdi-phone"></i></div>
                                    <div className="footer_address_cardtext">+91 99824*****</div>
                                </div>
                            </div>
                            <div className="footer_social_card">
                                <h5>GET SOCIAL</h5>
                                <p>Follow us to stay connected and get instant updates.</p>
                                <div className="footer_social_cardlinks">
                                    <NavLink to='https://www.facebook.com/' className="footer_social_cardlink fb_icon"><i className="zmdi zmdi-facebook"></i></NavLink>
                                    <NavLink to='https://www.instagram.com/' className="footer_social_cardlink insta_icon"><i className="zmdi zmdi-instagram"></i></NavLink>
                                    <NavLink to='https://www.twitter.com/' className="footer_social_cardlink twitter_icon"><i className="zmdi zmdi-twitter"></i></NavLink>
                                    <NavLink to='https://www.linkedin.com/' className="footer_social_cardlink linkedin_icon"><i className="zmdi zmdi-linkedin-box"></i></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_line">
                    Colyright @ 2023 | All Rights Reserved | DEEPAK DHAKER
                </div>

            </div>
        </>
    )
}

export default Footer;
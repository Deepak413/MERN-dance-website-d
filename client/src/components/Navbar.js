import React, { useContext } from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo2.png';

import { UserContext } from '../App';

const Navbar = () => {

    // const { state, dispatch } = useContext(UserContext);
    const { state } = useContext(UserContext);

    const RenderMenu = () => {
        if (state) {
            return (
                <>
                    <li className="nav-item active me-2">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item active me-2">
                        <NavLink className="nav-link" to="/pricing">Pricing</NavLink>
                    </li>
                    <li className="nav-item active me-2">
                        <NavLink className="nav-link" to="/instructor">Instructor</NavLink>
                    </li>
                    <li className="nav-item active me-2">
                        <NavLink className="nav-link" to="/about">AboutMe</NavLink>
                    </li>
                    <li className="nav-item active me-2">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-item active me-2">
                        <NavLink className="nav-link" to="/logout">Logout</NavLink>
                    </li>
                </>
            )
        }
        else {
            return (
                <>
                    <li className="nav-item active me-2">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item active me-2">
                        <NavLink className="nav-link" to="/pricing">Pricing</NavLink>
                    </li>
                    <li className="nav-item active me-2">
                        <NavLink className="nav-link" to="/instructor">Instructor</NavLink>
                    </li>
                    <li className="nav-item active me-2">
                        <NavLink className="nav-link" to="/about">AboutMe</NavLink>
                    </li>
                    <li className="nav-item active me-2">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-item active me-2">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item active me-2">
                        <NavLink className="nav-link" to="/signup">Registration</NavLink>
                    </li>
                </>
            )
        }

    }

    return (
        <>
            <nav className="nav navbar navbar-expand-lg navbar-light ">
                <NavLink to="/">JUST
                    <img className='logoimg' src={logo} alt="logo" /> DANCE
                </NavLink>
                <button className="navbar-toggler navbar_collapse_btn" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="nav_container collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <RenderMenu />
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
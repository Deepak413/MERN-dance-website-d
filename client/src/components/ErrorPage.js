import React from 'react';
import { NavLink } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
  return (
    <>
        <div id="notfound">
            <div className="notfound">
                <div className="not_found_404">
                    <h1>404</h1>
                </div>
                <h2>We are sorry, Page not found</h2>
                <NavLink to="/">Go to Home</NavLink>
            </div>
        </div>
    </>
  )
}

export default ErrorPage
import React, { createContext, useReducer } from 'react';

import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Pricing from './components/Pricing';
import Instructor from './components/Instructor';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';

import { initialState, reducer } from './reducer/UseReducer';

// 1. contextAPI
export const UserContext = createContext();

const Routing = () => {
  return (
    <Routes>
      <Route exact path='/' Component={Home}></Route>
      <Route path='/pricing' Component={Pricing}></Route>
      <Route path='/instructor' Component={Instructor}></Route>
      <Route path='/about' Component={About}></Route>
      <Route path='/contact' Component={Contact}></Route>
      <Route path='/login' Component={Login}></Route>
      <Route path='/signup' Component={Signup}></Route>
      <Route path='/logout' Component={Logout}></Route>
      <Route path='/*' Component={ErrorPage}></Route>
    </Routes>
  )
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <UserContext.Provider value={{state, dispatch}}>
        <Navbar />
        <Routing />
        <Footer />
      </UserContext.Provider>

    </>
  )
}

export default App;
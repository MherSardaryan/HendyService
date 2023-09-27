import {Route,Routes } from 'react-router-dom';
// import LogReg from './components/body/SectionPages/LoginRegistration/LoginForm';
// import { useState } from 'react';
import Header from './components/body/Header/Header';
import RegistrationPage from './components/body/SectionPages/LoginRegistration/RegistrationPage';
import Home from './components/body/SectionPages/Home/Home';
import Events from './components/body/SectionPages/Events/Events';
import User from './components/body/Users/User';
// import userDate from './components/body/SectionPages/LoginRegistration/userDate'

function App() {

  return (
  <>
        
   <Header />
    <Routes>
      <Route  exact path='/events'  element={<Events />} />
      <Route  exact path=''  element={<Home />} />
      <Route  exact path='/user'  element={<User />} />
      <Route  exact path='/registration'  element={<RegistrationPage />} />
   </Routes>

  </>

  );
}

export default App;
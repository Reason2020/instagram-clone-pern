import React from 'react';
import Header from './components/header/Header';
import './Signup.css';
import SignupForm from './components/form/SignupForm';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <main className='main_container'>
      <div className="form_container">
        <Header />
        <SignupForm />
      </div>
      <div className="navigation_container">
        <p>Have an account? <Link to={'/accounts/login'}>Log in</Link></p>
      </div>
    </main>
  )
}

export default Signup;
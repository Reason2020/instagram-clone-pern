import './SignupForm.css';
import React, { useState } from 'react'
import Errors from '../errors/Errors';
import { signUpNewUser } from '../../../../api/users';
import { Link, useNavigate } from 'react-router-dom';

const SignupForm = () => {
    const [ username, setUsername ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ errorMessage, setErrorMessage ] = useState("");

    const navigate = useNavigate();

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await signUpNewUser(username, email, password);
            console.log("Success: ", response.userId);
            navigate("/");
        } catch(err) {
            console.log("Error: ", err.response.data.message);
            setErrorMessage(err.response.data.message);
        }
    }

    return (
        <form onSubmit={handleFormSubmit} className='form_container'>
            {errorMessage ? <Errors errorText={errorMessage} /> : null}
            <div className="input_fields_container">
                <input 
                    type="text" 
                    name="username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Username' />
                <input 
                    type="email" 
                    name="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email' />
                <input 
                    type="password" 
                    name="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password' />
            </div>
            <div className="links_container">
                <p className="learn_more_text">
                    People who use our services may have uploaded your contact information to instagram. <Link to='/learn-more'>Learn More</Link> 
                </p>
                <p className="terms_and_policies_text">
                    By signing up, you agree to our  <Link to='/terms_and_policies'>Terms, Privacy Policy</Link> and <Link to='/cookies_policy'>Cookies Policy</Link> 
                </p>
            </div>
            <button type="submit">Sign up</button>
        </form>
    )
}

export default SignupForm
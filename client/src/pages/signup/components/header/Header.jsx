import React from 'react'
import instagramTextLogo from '../../../../assets/text-logo.png'
import './Header.css';

const Header = () => {
  return (
    <div className="header_container">
        <img src={instagramTextLogo} className='header_logo' alt="Instagram Text Logo" />
        <p className="header_text">
            Signup to see photos and videos from your friends.
        </p>
    </div>
  )
}

export default Header
import React from 'react'
import './Errors.css';

const Errors = ({ errorText }) => {
  return (
    <div className="error_container">
        <p className="error_text">{errorText}</p>
    </div>
  )
}

export default Errors
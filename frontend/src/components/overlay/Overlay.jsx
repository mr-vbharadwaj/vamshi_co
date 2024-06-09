import React from 'react';
import { useState, useEffect } from 'react';
import {logo} from '../../assets/img/imports';
import './Overlay.css'

const Overlay = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
        setIsVisible(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);
  return (
    <div>
      {isVisible && (
        <div className="overlay-container">
          <img className="logo" src={logo} alt="Logo" />
        </div>
      )}
    </div>
  )
}

export default Overlay

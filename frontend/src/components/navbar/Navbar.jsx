import React, { useState, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { logo } from '../../assets/img/imports';
import './Navbar.css';

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#about">About</a></p>
    <p><a href="#services">Services</a></p>
    <p><a href="#products">Products</a></p>
    <p><a href="#contact">Contact</a></p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowTopBtn(true);
    } else {
      setShowTopBtn(false);
    }
  };

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='navbar' id='home'>
      <div className='navbar-links'>
        <div className='navbar-logo'>
          <img src={logo} alt='logo' />
          <h2>YAANENDRIYA</h2>
        </div>
        <div className='navbar-links-container'>
          <Menu />
        </div>
      </div>
      <div className='navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='navbar-menu_container'>
            <div className='navbar-menu_container-links'>
              <Menu />
            </div>
          </div>
        )}
      </div>
      {showTopBtn && (
        <button className='go-to-top' onClick={goToTop}>Top</button>
      )}
    </div>
  );
};

export default Navbar;

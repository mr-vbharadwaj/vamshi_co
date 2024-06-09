import React, { useState }  from 'react'
import { RiMenu3Line, RiCloseLin, RiCloseLine } from 'react-icons/ri'
import { logo } from '../../assets/img/imports';
import './Navbar.css'

const Menu = () =>(
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#about">About</a></p>
  <p><a href="#services">Services</a></p>
  <p><a href="#products">Products</a></p>
  <p><a href="#contact">Contact</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='navbar' id='home'>
      <div className='navbar-links'>
        <div className='navbar-logo'>
          <img src={logo} alt='logo'></img>
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
          <div className='navbar-menu_container scale-up-center'>
          <div className='navbar-menu_container-links'>
            <Menu />
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar

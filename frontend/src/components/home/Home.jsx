import React from 'react';
import './Home.css';
import {ydx, yqx } from '../../assets/img/imports';

const Home = () => {
  return (
    <section id='home'>
      <div className='home' >
        <div className='heading'>
          <h1>
            <span className='span1'>Revolutionizing</span>
            <br />
            <span className='span2'>Sensor Solutions</span> 
            &nbsp;with
            <br/>
            <span className='span3'>Precision and Innovation</span>
          </h1>
        </div>
        <center>
          <div className='gallery'>
            <div className='gallery1'>
              <img src={yqx} alt="YQX_Sensor_gif" />
              <p>IMUs contribute to advanced navigation solutions by offering real-time 
              information on velocity, acceleration, and angular rate, ensuring 
              reliable performance in complex tasks such as mapping, localization, and obstacle avoidance.</p>
            </div>
            <div className='gallery2'>
              <p>IMUs allow for accurate control and immersive gameplay in virtual reality (VR) and augmented 
                reality (AR) environments. This technology enables gamers to interact naturally with the virtual 
                world, translating physical movements into in-game actions with high fidelity.</p>
              <img src={ydx} alt="YDX_Sensor_gif" />
            </div>
          </div>
        </center>
      </div>
    </section>
  )
}

export default Home

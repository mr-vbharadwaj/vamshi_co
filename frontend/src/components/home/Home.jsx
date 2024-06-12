// src/components/Home.js
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import ReactTypingEffect from 'react-typing-effect';
import './Home.css';
import { ydx, yqx } from '../../assets/img/imports';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 2300); // Delay to create a slow loading effect
      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <section id="home" ref={ref}>
      <div className='outer'>
        <div className='home'>
          <div className={`heading ${isLoaded ? 'loaded' : ''}`}>
            <h1>
                <span className="span1">
                    <ReactTypingEffect
                        text={['Revolutionizing']}
                        speed={100}
                        eraseDelay={100000000000}
                        typingDelay={3000}
                    />
                </span>
                <br />
                <span className="span2">
                    <ReactTypingEffect
                        text={['Sensor Solutions with']}
                        speed={100}
                        eraseDelay={100000000000}
                        typingDelay={5000}
                    />
                </span>
                <br />
                <span className="span3">
                    <ReactTypingEffect
                        text={['Precision and Innovation']}
                        speed={100}
                        eraseDelay={10000000000000}
                        typingDelay={7500}
                    />
                </span>
            </h1>
          </div>
          <center>
            <div className={`gallery ${isLoaded ? 'loaded' : ''}`}>
              <div className="gallery1">
                <img src={yqx} alt="YQX_Sensor_gif" />
                <p>
                  IMUs contribute to advanced navigation solutions by offering
                  real-time information on velocity, acceleration, and angular
                  rate, ensuring reliable performance in complex tasks such as
                  mapping, localization, and obstacle avoidance.
                </p>
              </div>
              <div className="gallery2">
                <img src={ydx} alt="YDX_Sensor_gif" />
                <p>
                  IMUs allow for accurate control and immersive gameplay in
                  virtual reality (VR) and augmented reality (AR) environments.
                  This technology enables gamers to interact naturally with the
                  virtual world, translating physical movements into in-game
                  actions with high fidelity.
                </p>
              </div>
            </div>
          </center>
        </div>
      </div>
    </section>
  );
};

export default Home;

import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './Services.css'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 500); // Delay to create a slow loading effect
      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <section id='services' ref={ref}>
      <div className={`services_section ${isLoaded ? 'loaded' : ''}`}>
        <div className='services_heading'>
          <h2>Our Services</h2>
        </div>
        <div className='services_info'>
          <div className='services_individual_info'>
            <h3>Sensor Modules</h3>
            <p>
            IMU sensors <br /> <br />
            Vibration sensors <br /> <br />
            Inclinometer sensors<br /> <br />
            </p>
          </div>
          <div className='services_individual_info'>
            <h3>Additional Features</h3>
            <p>
            Drivers <br /> <br />
            AI Assisted <br /> <br />
            Support team <br /> <br />
            Firmware development <br /> <br />
            Calibration software support <br /> <br />
            </p>
          </div>
          <div className='services_individual_info'>
            <h3>Motion Capture</h3>
            <p>
            Sensor modules <br /> <br />
            Breakout boards <br /> <br />
            System on module <br /> <br />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

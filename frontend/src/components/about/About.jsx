import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './About.css';
import { Vamshi, Jackson, Vijay, Sivan, Vyshak } from '../../assets/img/imports';

const About = () => {
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
    <section id='about' ref={ref}>
        <div className={`about_section ${isLoaded ? 'loaded' : ''}`}>
            <div className='about_heading'>
                <h2>About Us</h2>
                <p>Advanced System-on-Modules integrating AI-enhanced 
                    GNSS and INS capabilities. Empowering buyers 
                    with smarter, cost-effective solutions.</p>
            </div>
            <div className='meet_section'>
                <h3>Meet the team</h3>
                <div className='info'>
                    <div className='individual_info'>
                        <img src={Vamshi} alt="Vamshi_image" />
                        <p><b>Vamshi Bharadwaj M V</b><br /> Chief of Technology and Execution</p>
                    </div>
                    <div className='individual_info'>
                        <img src={Jackson} alt="Jackson_image" />
                        <p><b>Jackson Charles</b><br /> Chief Animator & Head of Product Management</p>
                    </div>
                    <div className='individual_info'>
                        <img src={Vijay} alt="Vijay_image" />
                        <p><b>Vijay H P</b><br /> Chief of Engineer & Administration</p>
                    </div>
                    <div className='individual_info'>
                        <img src={Sivan} alt="Sivan_image" />
                        <p><b>Sivan Sriman</b><br /> Chief Embedded Engineer</p>
                    </div>
                    <div className='individual_info'>
                        <img src={Vyshak} alt="Vyshak_image" />
                        <p><b>Vyshak Y</b><br /> Chief of Operations & Business</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About

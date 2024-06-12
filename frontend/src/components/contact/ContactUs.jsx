// import React, { useState } from 'react';
// import axios from 'axios';
// import './Contact.css';

// const ContactUs = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: '',
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:5000/api/contact', formData);
//             alert(response.data);
//         } catch (error) {
//             alert('Error submitting form');
//         }
//     };

//     return (
//         <section id="contact" class="contact-section">
// 			<h2>Contact Us</h2>
// 			<form action={handleSubmit} method="post">
// 				<div class="">
// 					<label for="first-name">First Name:</label>
// 					<input type="text" id="first-name" name="first-name" required></input>
// 				</div>
// 				<div class="">
// 					<label for="last-name">Last Name:</label>
// 					<input type="text" id="last-name" name="last-name" required></input>
// 				</div>
// 				<div class="">
// 					<label for="organization">Organization:</label>
// 					<input type="text" id="organization" name="organization"></input>
// 				</div>
// 				<div class="">
// 					<label for="location">Location:</label>
// 					<input type="text" id="location" name="location"></input>
// 				</div>
// 				<div class="">
// 					<label for="contact">Your Contact (Optional):</label>
// 					<input type="text" id="contact" name="contact"></input>
// 				</div>
// 				<div class="">
// 					<label for="email">Your Mail ID:</label>
// 					<input type="email" id="email" name="email" required></input>
// 				</div>
// 				<div class="">
// 					<label for="message">Write us:</label>
// 					<textarea id="message" name="message" required></textarea>
// 				</div>
// 				<div class=" form-check">
// 					<input type="checkbox" id="subscribe" name="subscribe"></input>
// 					<label for="subscribe">Subscribe to our marketing emails</label>
// 				</div>
// 				<div class=" form-check">
// 					<input type="checkbox" id="linkedin-newsletter" name="linkedin-newsletter"></input>
// 					<label for="linkedin-newsletter">Subscribe to our LinkedIn newsletter</label>
// 				</div>
// 				<button type="submit">Send</button>
// 			</form>
// 		</section>
//     );
// };

// export default ContactUs;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        organisation: '',
        location: '',
        contactInfo: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/contact', formData);
            alert(response.data);
        } catch (error) {
            alert('Error submitting form');
        }
    };

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
        <section id="contact" ref={ref}>
            <div className={`contact-section ${isLoaded ? 'loaded' : ''}`}>
                <h2>Contact Us</h2>
                <div className="contact-container">
                    <div className="form-container">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <div className="field-container">
                                    <label htmlFor="firstName">First Name:</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="field-container">
                                    <label htmlFor="lastName">Last Name:</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="field-container">
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="field-container">
                                    <label htmlFor="organisation">Organisation:</label>
                                    <input
                                        type="text"
                                        id="organisation"
                                        name="organisation"
                                        value={formData.organisation}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="field-container">
                                    <label htmlFor="location">Location:</label>
                                    <input
                                        type="text"
                                        id="location"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="field-container">
                                    <label htmlFor="contactInfo">Contact No<br />(Optional):</label>
                                    <input
                                        type="text"
                                        id="contactInfo"
                                        name="contactInfo"
                                        value={formData.contactInfo}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="field-container">
                                    <label htmlFor="message">Message:</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            <button type="submit">Send</button>
                            </div>
							<div className="locate-us">
								<h2>Locate Us</h2>
								<p>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} /> &nbsp;
                                    <a href="https://maps.app.goo.gl/uz4yoKrmrST3WBbt7" target="_blank" rel="noopener noreferrer">
                                        Yaanendriya, <br />ARTgarage, Bengaluru - 560013
                                    </a>
                                </p>
                                <p>Email: &nbsp;
                                    <a href="mailto:vamshi@artpark.in" target="_blank" rel="noopener noreferrer">
                                        vamshi@artpark.in
                                    </a>
                                </p>
							</div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;


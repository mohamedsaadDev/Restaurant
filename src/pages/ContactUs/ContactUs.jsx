import React from 'react'
import "./contact.css"
const ContactUs = () => {
    return (
        <div id="contact" className='conatner-contactus'>
            <div className='container-info-contactus'>
                <h2>Contact Us</h2>
                <h5>Contemnit enim disserendi elegantiam, confuse</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Contemnit enim disserendi elegantiam, confuse loquitur. 
                    Ex rebus enim timiditas, non ex vocabulis nascitur. Et quod est munus, quod opus sapientiae
                </p>
                <ul>
                    <li className='container-icon-contact'><i className="fa-solid fa-location-dot icon-contact"></i>14 Contemnit enim disserendi elegantiam</li>
                    <li className='container-icon-contact'><i className="fa-solid fa-phone icon-contact"></i>00334045</li>
                    <li className='container-icon-contact'><i className="fa-solid fa-envelope icon-contact"></i>Eamil@add.com</li>
                </ul>
            </div>  
        </div>
    )
}
export default ContactUs
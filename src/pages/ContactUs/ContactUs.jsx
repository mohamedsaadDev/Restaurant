import React from 'react'
import "./contact.css"
const ContactUs = () => {
    const srcmap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.61184984626!2d31.34086696215957!3d30.059611343877222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2z2KfZhNmC2KfZh9ix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e0!3m2!1sar!2seg!4v1693341684825!5m2!1sar!2seg"
    return (
        <div id="contact" className='conatner-contactus'>
            <div className='conatner-map-contactus'>
                <iframe 
                className='map-contactus'
                src= {srcmap}
                loading="lazy"
                ></iframe>
            </div>
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
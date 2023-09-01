import React from 'react'
import "./services.css"
import Card from 'react-bootstrap/Card';
import logo1  from "../../data/imges/icon-1.svg"
import logo2  from "../../data/imges/icon-2.svg"
import logo3  from "../../data/imges/icon-3.svg"
import logo4  from "../../data/imges/icon-4.svg"
import logo5  from "../../data/imges/icon-5.svg"
import logo6  from "../../data/imges/icon-6.svg"
const Services = () => {
    return (
        <div className='container-services' id='services'>
            <Card data-aos="fade-down"  data-aos-easing="linear" data-aos-duration="1000" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={logo1} />
                <Card.Body>
                    <Card.Title>Always Fresh Food</Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. disserendi elegantiam, confuse loquitur.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card data-aos="fade-down"  data-aos-easing="linear" data-aos-duration="1000" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={logo2} />
                <Card.Body>
                    <Card.Title>Always Fresh Food</Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. disserendi elegantiam, confuse loquitur.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card data-aos="fade-down"  data-aos-easing="linear" data-aos-duration="1000" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={logo3} />
                <Card.Body>
                    <Card.Title>Always Fresh Food</Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. disserendi elegantiam, confuse loquitur.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card data-aos="fade-down"  data-aos-easing="linear" data-aos-duration="1000" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={logo4} />
                <Card.Body>
                    <Card.Title>Always Fresh Food</Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. disserendi elegantiam, confuse loquitur.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card data-aos="fade-down"  data-aos-easing="linear" data-aos-duration="1000" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={logo5} />
                <Card.Body>
                    <Card.Title>Always Fresh Food</Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. disserendi elegantiam, confuse loquitur.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card data-aos="fade-down"  data-aos-easing="linear" data-aos-duration="1000" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={logo6} />
                <Card.Body>
                    <Card.Title>Always Fresh Food</Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. disserendi elegantiam, confuse loquitur.
                    </Card.Text>
                </Card.Body>
            </Card>
            
        </div>
    )
}

export default Services
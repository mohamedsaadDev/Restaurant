import imgabout from "../../data/imges/about.jpeg"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./about.css"
const About = () => {
    return (
        <>
            <div id='about' className='contaier-about'>
                <div data-aos="fade-right"  data-aos-easing="linear" data-aos-duration="1000" className='container-info-about'>
                    <h2 className='title-about'>About Restaurant</h2>
                    <h5 className='subtitle-about'>Contemnit enim disserendi elegantiam, confuse</h5>
                    <p className='paragraph-about'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Contemnit enim disserendi elegantiam, 
                        confuse loquitur. 
                        Ex rebus enim timiditas, non ex vocabulis nascitur. Et quod est munus
                        , quod opus sapientiae? Duarum enim vitarum nobis erunt instituta capienda. Septem autem illi non suo, 
                        sed populorum suffragio omnium nominati sunt.</p>
                </div>   
                <img data-aos="fade-left"  data-aos-easing="linear" data-aos-duration="1000" className='img-about' src={imgabout} alt="" />
            </div>
            <div  className='container-form-about'>
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" className='form-about'>
                    <h1 className='title-form-about'>BOOK NOW</h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="name" placeholder="Enter name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="phone" placeholder="phone" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="date"/>
                        </Form.Group>
                        <Form.Select size="lg">
                            <option>select services</option>
                            <option>the second option</option>
                            <option>the third option</option>
                            <option>the second option</option>
                            <option>the third option</option>
                        </Form.Select>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Button onClick={(e)=>e.preventDefault()} variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}
export default About
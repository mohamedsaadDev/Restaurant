import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../data/imges/logo-1.png"
import "./Navbar.css"
const  Navbars = () => {
    //
return (
    <Navbar expand="lg" className="fixed-top container-navbar">
        <Container>
            <Navbar.Brand href="#home"><img className='img-navbar' src={logo} alt="" /></Navbar.Brand>
            <Navbar.Toggle className='bg-lght' aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav variant="underline" defaultActiveKey="#home" className="me-auto">
                    <Nav.Item>
                        <Nav.Link href="#home">HOME</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#about"> ABOUT</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#services">SERVICES</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#menu">MENU</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#team">TEAM</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#contact">CONTACT US</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);
}

export default Navbars;
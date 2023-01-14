import Quickit from './images/Quickit.png'
import Vector from './images/nav-img.png'
import Vector2 from './images/Vector-Stroke.png'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className='bg-black opacity-60'>
      <Container fluid>
        <Navbar.Brand href="#"><div className='navbar'>
          <img src={Vector} alt="" />
          <img src={Quickit} alt="" />
        </div></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-lg-0"
            navbarScroll
          >
            <Nav.Link href="#action1" className='text-white'>Why Quickit</Nav.Link>
            <Nav.Link href="#action2" className='text-white'>Solutions</Nav.Link>
            <Nav.Link href="#" className='text-white'>Resources </Nav.Link>
            <Nav.Link href="#" className='text-white'>Pricing </Nav.Link>
            <Nav.Link href="#" className='text-white'>Contacts </Nav.Link>
          </Nav>
          <div className="flex justify-between p-0 opacity-100">
          <a href="#" className='text-white mt-1'>
            <img src={Vector2} alt="" />
          </a>
          <a href="#" className='text-white ml-6 mt-1'>|</a>
          <a href="#" className='text-white ml-6 no-underline mt-1'>Log In </a>
          <button className='bg-blue-800 ml-6 p-2 text-white mb-2'>Request a demo</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;


import { Link } from 'react-router-dom'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css'; 

function Navbarmain() {
  return (
    <Navbar expand="lg" className="fixed-top">
      <Container>
        <Navbar.Brand href="/" className='navbrand'>Leandro Hosken</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <i className="bi bi-list" /> 
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" className="px-3 ">Home</Nav.Link>
            <Nav.Link as={Link} to="/now-playing" className="px-3">Nos Cinemas</Nav.Link>
            <Nav.Link as={Link} to="/popular" className="px-3">Popular</Nav.Link>
            <Nav.Link as={Link} to="/top-rated" className="px-3">Mais bem avaliados</Nav.Link>
            <Nav.Link as={Link} to="/upcoming" className="px-3">Em breve nos Cinemas</Nav.Link>
            <Nav.Link as={Link} to="/about" className="px-3">Sobre</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarmain;

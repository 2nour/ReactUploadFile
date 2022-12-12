import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarUpload = () =>  (
    <Navbar bg="light" expand="lg" as={Nav}>
      <Container>
        <Navbar.Brand href="#home">File Handeler</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Upload</Nav.Link>
            <Nav.Link href="#link">Download</Nav.Link>
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );


export default NavbarUpload;
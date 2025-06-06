import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  const styles = {
    navbar: {
      background: 'linear-gradient(90deg, #8e2de2, #4a00e0)', // neon fialový gradient
      boxShadow: '0 0 15px #8e2de2',
      fontWeight: 'bold',
      fontSize: '18px',
    },
    brand: {
      color: '#00ffc3',
      textShadow: '0 0 10px #00ffc3',
      fontWeight: '900',
      fontSize: '24px',
      letterSpacing: '2px',
    },
    navLink: {
      color: '#00ffc3',
      textShadow: '0 0 6px #00ffc3',
      marginLeft: '15px',
      transition: 'color 0.3s ease',
      cursor: 'pointer',
    },
    navLinkHover: {
      color: '#ffffff',
      textShadow: '0 0 20px #00ffc3',
    },
    dropdownToggle: {
      color: '#00ffc3',
      textShadow: '0 0 6px #00ffc3',
      cursor: 'pointer',
    }
  };

  return (
    <Navbar expand="lg" style={styles.navbar} variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/" style={styles.brand}>Kočičí Web</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" style={styles.navLink}>Domů</Nav.Link>
            <Nav.Link href="/about" style={styles.navLink}>Kočičky</Nav.Link>
            <Nav.Link href="#pricing" style={styles.navLink}>Ceník</Nav.Link>
            <NavDropdown title="Další" id="basic-nav-dropdown" style={styles.dropdownToggle}>
              <NavDropdown.Item href="#action1">Akce 1</NavDropdown.Item>
              <NavDropdown.Item href="#action2">Akce 2</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Ještě něco</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;

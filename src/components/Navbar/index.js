import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Navbar.css";

function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Navbar.Brand>
        <Link to="/">
          <img src="https://fptplay.vn/images/logo.png" alt="logo" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-center">
          <Link to="/anime" className="nav-link">
            Anime
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;

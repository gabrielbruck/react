import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar bg="light" variant="light">
      <Nav className="mr-auto">
        <Nav.Link href="#home">SERVICES</Nav.Link>
        <Nav.Link href="#features">WORK</Nav.Link>
        <Nav.Link className="nav-team" href="#pricing">
          THE TEAM
        </Nav.Link>
      </Nav>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    </Navbar>
  );
}

export default Navigation;

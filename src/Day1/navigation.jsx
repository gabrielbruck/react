import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar bg="light" variant="light">
      <Nav className="mr-auto">
        <Nav.Link href="#services">SERVICES</Nav.Link>
        <Nav.Link href="#work">WORK</Nav.Link>
        <Nav.Link className="nav-team" href="#Team">
          THE TEAM
        </Nav.Link>
      </Nav>
      <i href="#home" className="fa fa-mobile fa-3x icon"></i>
    </Navbar>
  );
}

export default Navigation;

import React from 'react';
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  Container
} from "reactstrap";

export const Heading = () => {
  return (
    <Navbar color="dark" dark>
      <Container>
        <NavbarBrand href="/">IPK/Semester</NavbarBrand>
        <Nav>
          <NavItem>
            <Link className="btn btn-primary" to="/add">Add data</Link>
            <Link className="btn btn-light ml-2" to="/about">About</Link>
          </NavItem>
        </Nav>

      </Container>
    </Navbar>
  )
}

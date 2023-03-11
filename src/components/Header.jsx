import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container fluid>
          <Navbar.Brand href="/">jewelleryShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto mr-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/cart">
                <i className="fas fa-shopping-cart"></i>Cart
              </Nav.Link>
              <Nav.Link href="/login">
                <i className="fas fa-user"></i>Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

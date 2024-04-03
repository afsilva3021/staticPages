import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";


export default function CollapsibleNavbar() {

  const logo = "";

  return (
    <Navbar
      collapseOnSelect
      className="opacity-100"
      expand="lg"
      bg="dark"
      data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">
          <img src="/images/logo.webp" style={{ width: 90, height: 60 }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="#features">Promoções</Nav.Link>
            <Nav.Link href="/produtos">Produtos</Nav.Link>
            <NavDropdown title="Categoria" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Capinha</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Peliculas
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cabos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Fone de ouvido
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Fonte</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/sobre"><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M14 7h-4v3a1 1 0 0 1-2 0V7H6a1 1 0 0 0-.997.923l-.917 11.924A2 2 0 0 0 6.08 22h11.84a2 2 0 0 0 1.994-2.153l-.917-11.924A1 1 0 0 0 18 7h-2v3a1 1 0 1 1-2 0V7Zm-2-3a2 2 0 0 0-2 2v1H8V6a4 4 0 0 1 8 0v1h-2V6a2 2 0 0 0-2-2Z" clip-rule="evenodd" />
            </svg>
            </Nav.Link>
            <Nav.Link eventKey={2} bg="dark" data-bs-theme="dark">
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd" />
              </svg> Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



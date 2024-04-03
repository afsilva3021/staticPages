import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";


function CollapsibleNavbar() {
  
  const logo = "/images/logo.png";

  return (
    <Navbar
      collapseOnSelect
      className="opacity-75"
      expand="lg"
      bg="dark"
      data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">
        <img src={logo} style={{width: 90, height: 85}}/>
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
            <Nav.Link href="/sobre"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
            </svg> Carrinho
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

export default CollapsibleNavbar;

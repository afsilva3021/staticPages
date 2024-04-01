import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CollapsibleNavbar from "../Components/navbar";
import React from 'react';

function Home() {
  const background = 'https://yesbrasil.com/wp-content/uploads/2023/12/Apple-iPhone-15-Pro-lineup-color-lineup-geo-230912_big.jpg.large_2x.jpg';


  return [
    <div>
      <CollapsibleNavbar />
    </div>,
    <div>
    <Container className="container-lx d-flex justify-content-center mt-5">
      <Row>
        <Col>
        <img src={background} style={{width: 900, height: 600}} />
        </Col>
      </Row>
    </Container>,
    </div>,
  ];
}

export default Home;

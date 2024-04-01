import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CollapsibleNavbar from "../Components/navbar";

function Home() {
  
  const image = require('../img/iphone-wallpaper.png');

  return [
    <div>
      <CollapsibleNavbar />
    </div>,
    <Container className="container-lx d-flex justify-content-center mt-5">
      <h1 className="d-flex justify-content-center">Home</h1>
      <Row>
        <Col>
        <img src={image} />
        </Col>
      </Row>
    </Container>,
  ];
}

export default Home;

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CollapsibleNavbar from "../Components/navbar";

function Produtos() {
  return [
    <div>
      <CollapsibleNavbar />
    </div>,
    <Container className="container-lx d-flex justify-content-center m-5">
      <h1>Produtos</h1>
      <Row>
        <Col></Col>
      </Row>
    </Container>,
  ];
}

export default Produtos;

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CollapsibleNavbar from "../Components/navbar";
import DarkVariantExample from "../Components/carousel"

function Home() {


  return [
    <CollapsibleNavbar />,
    <div>
      <Container className="container-xxl d-flex justify-content-center mt-5">
        <Row>
          <Col className="justify-content-end">
          <h1>Loja. <p className=" h3 text-primary"> O melhor jeito de comprar o que você ama.</p> </h1>
          </Col>
          <Col>
            <img src="/images/AppleWatch.jpeg" className="ms-5" style={{width:400, height: 300}} />
          </Col>
        </Row>
      </Container>
    </div>,
    <div className="mt-5">
      <DarkVariantExample />
    </div>
  ];
}

export default Home;

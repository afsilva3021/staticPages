import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CollapsibleNavbar from "../Components/navbar";
import DarkVariantExample from "../Components/carousel"

function Home() {
  const imgIphones = '/images/iphone-wallpaper.webp';


  return [
    <CollapsibleNavbar />,
    <div>
      <Container className="container-lx d-flex justify-content-center mt-5">
        <Row>
          <Col>
            <img src={imgIphones} style={{ width: 900, height: 600 }} />
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

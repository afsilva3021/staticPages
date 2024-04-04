import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CollapsibleNavbar from "../Components/CollapsibleNavbar";
import DarkVariantCarousel from "../Components/DarkVariantCarousel";

function Home() {


  return [
    <CollapsibleNavbar/>,
    <div>
      <Container className="container-xxl d-flex justify-content-center mt-5" >
        <Row>
          <Col className="container-xll">
            <Col><h1 className="text-primary">Aqui.</h1></Col>
            <p className=" h2 text-body-secondary">O seu sonho seturna realidade.</p>
            <p className=" h2 text-body-secondary">Você pode dar seu iphone usado na troca de um novo</p>
          </Col>
          <Col>
            <img src="/images/iphone-13-finish.jpeg" className="d-flex w-50 ms-5" style={{ margin: 'auto',
            maxWidth: 'auto',
            maxHeight: 'auto'}} />
          </Col>
        </Row>
      </Container>
    </div>,
    <Container className="mt-3">,
      <div className="">
        <DarkVariantCarousel />
      </div>
    </Container>
  ];
}

export default Home;

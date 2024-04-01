import 'bootstrap/dist/css/bootstrap.min.css';
import CollapsibleNavbar from "../Components/navbar";
import Container from 'react-bootstrap/Container'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';



function Sobre() {





    return ([<div>
        <CollapsibleNavbar />
    </div>,
    <Container>
        <Row>
            <h1>Sobre</h1>
            <Col>
                <h3>Testando</h3>
            </Col>
        </Row>
    </Container>
    ])
}


export default Sobre
import 'bootstrap/dist/css/bootstrap.min.css';
import OffcanvasNavbar from '../templates/navbar'
import Container from 'react-bootstrap/Container'
import { Row } from 'react-bootstrap';


function Sobre() {
    return ([<div>
        <OffcanvasNavbar></OffcanvasNavbar>
    </div>,
    <Container>
        <Row>
            <h1>Sobre</h1>
        </Row>
    </Container>
    ])
}


export default Sobre
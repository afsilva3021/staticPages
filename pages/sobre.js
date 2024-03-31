import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import OffcanvasExample from '../templates/navbar'
import Container from 'react-bootstrap/Container'
import { Row } from 'react-bootstrap';


function Sobre() {
    return ([<div>
        <OffcanvasExample></OffcanvasExample>
    </div>,
    <Container>
        <Row>
            <h1>Sobre</h1>
        </Row>
    </Container>
    ])
}


export default Sobre
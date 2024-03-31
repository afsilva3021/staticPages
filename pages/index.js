import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OffcanvasNavbar from '../templates/navbar'



function Home() {
    return ([
        <div>
            <OffcanvasNavbar></OffcanvasNavbar>
        </div>,
        <Container>
            <Row>
                <h1>Home</h1>
            </Row>
        </Container>
    ])
}




export default Home
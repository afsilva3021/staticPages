import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export default function LeftTabs() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={2}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="iphone">Iphone</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="appleWatch">apple Watch</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="airPods">airPods</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="capinha">Caminhas</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="cabos">Cabos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Fonte">Fontes</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={4}>
          <Tab.Content>
            <Tab.Pane eventKey="iphone">
              <Row>
                <Col>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/images/produtos/iphone13mini.webp" />
                    <Card.Body>
                      <Card.Title>Iphone 13 Mini</Card.Title>
                      <Card.Text>
                        Vermelho com 128G de armazenamento<br />
                        acompanha fone, carregador, fonte e caixa.
                      </Card.Text>
                      <h5 className='text-Center'>R$: 1.700,00</h5>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/images/produtos/iphone13mini.webp" />
                    <Card.Body>
                      <Card.Title>Iphone 13 Mini</Card.Title>
                      <Card.Text>
                        Vermelho com 128G de armazenamento<br />
                        acompanha fone, carregador, fonte e caixa.
                      </Card.Text>
                      <h5 className='d-flex justify-content-center'>R$: 1.700,00</h5>
                      <Button variant="primary" className="ms-5">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>

              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="appleWatch">
              <div className="container-sm">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="/images/produtos/iphone13mini.webp" />
                  <Card.Body>
                    <Card.Title>Iphone 13 Mini</Card.Title>
                    <Card.Text>
                      Vermelho com 128G de armazenamento<br />
                      acompanha fone, carregador, fonte e caixa.
                    </Card.Text>
                    <h5 className='text-Center'>R$: 1.700,00</h5>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
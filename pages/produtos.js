import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CollapsibleNavbar from "../Components/CollapsibleNavbar";
import LeftTabs from "../Components/LeftTabs";

function Produtos() {
  return [
    <CollapsibleNavbar />,
    <header>
      <nav className="mt-5">
        <ul>
          <LeftTabs/>
        </ul>
      </nav>
    </header>,
    <main>,
      <Container>

      </Container>
    </main>

  ];
}

export default Produtos;

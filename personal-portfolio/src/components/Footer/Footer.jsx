import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/img/logo.svg";
import ContactButtons from "../ContactButtons/ContactButtons.jsx"


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
              <ContactButtons />
              <p>Copyright {new Date().getFullYear()} . All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

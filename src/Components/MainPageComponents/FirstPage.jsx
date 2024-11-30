import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./../../assets/css/FirstPage.css";
import { useNavigate } from "react-router-dom";

const FirstPage = () => {
  const navigate = useNavigate();
  return (
    <div className="first-page">
      <Container fluid className="text-container">
        <Row className="justify-content-center align-items-center text-center">
          <Col md={8}>
            <h1 className="company-name">Arslan Electronics</h1>
            <p className="description" >
            Arslan Electronics is a leading electronics shop located in Rawalakot.  Our inventory includes a wide range of electronic goods.With a focus on quality, innovation, and customer satisfaction, Arslan Electronics is your trusted partner for all things electronics.
            </p>
            <Button onClick={() => navigate("/contact")} variant="primary" size="lg" className="cta-button">
              Contact Us
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FirstPage;

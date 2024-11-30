import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaWhatsapp, FaEnvelope, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./../../assets/css/contact.css";

const ContactPage = () => {
  return (
    <Container className="contact-page mt-5">
      <Row className="justify-content-center text-center">
        <Col md={8}>
          <h1 className="mb-4">Contact Us</h1>
          <p className="text-muted mb-5">
            We’d love to hear from you! Feel free to reach out through the methods below or connect with us on social media.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6} lg={4} className="text-center">
          <Button
            variant="outline-success"
            className="contact-btn mb-3"
            href="https://wa.me/+923138144084"
            target="_blank"
          >
            <FaWhatsapp className="me-2" /> WhatsApp
          </Button>
          <Button
            variant="outline-primary"
            className="contact-btn mb-3"
            href="mailto:arslankhanrkt@gmail.com"
          >
            <FaEnvelope className="me-2" /> Email
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col md={6} lg={4} className="text-center">
          <div className="social-icons">
            <a
              href="https://www.facebook.com/muhammad.khan.1023611"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaFacebook />
            </a>
            
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook,  FaEnvelope } from "react-icons/fa";
import "./../../assets/css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-top">
          <Col md={4} className="footer-section">
            <h5 className="footer-title">About Us</h5>
            <p>
              We provide innovative solutions to help you succeed in the Electronic world.
              Your goals are our passion.
            </p>
          </Col>
          <Col md={4} className="footer-section">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </Col>
          <Col md={4} className="footer-section">
            <h5 className="footer-title">Connect With Us</h5>
            <div className="footer-social-icons">
              <a href="https://www.facebook.com/muhammad.khan.1023611" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
             
              <a href="mailto:arslankhanrkt@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="footer-bottom">
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Arslan Electronics. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

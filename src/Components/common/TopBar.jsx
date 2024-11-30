import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaPhoneAlt, FaClock } from "react-icons/fa";
import "./../../assets/css/topbar.css";

const TopBar = () => {
  return (
    <div className="topbar">
      <Container>
        <Row>
          <Col md={4} sm={12} className="topbar-info">
            <div className="topbar-item">
              <FaEnvelope className="topbar-icon" />
              <a href="mailto:xavics48@gmail.com" className="topbar-link">
                xavics48@gmail.com
              </a>
            </div>
          </Col>
          <Col md={4} sm={12} className="topbar-info">
            <div className="topbar-item">
              <FaPhoneAlt className="topbar-icon" />
              <a href="tel:+923138144084" className="topbar-link">
                +92-316-0854067
              </a>
            </div>
          </Col>
          <Col md={4} sm={12} className="topbar-info">
            <div className="topbar-item">
              <FaClock className="topbar-icon" />
              <span className="topbar-text">Mon - Fri: 9:00 AM - 6:00 PM</span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBar;

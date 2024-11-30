// Services.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "./../../assets/css/services.css";

// Import your SVG images
import UPSImage from "./../../assets/images/ups.png";
import CameraImage from "./../../assets/images/camera.png";
import PrintingImage from "./../../assets/images/printing.jpeg";
import PhotocopyImage from "./../../assets/images/photocopy.jpg";

const services = [
  {
    title: "Custom UPS Solutions",
    image: UPSImage,
    description:
      "Manufacturing UPS systems tailored to client needs for reliable power solutions.",
  },
  {
    title: "Specialized Cameras",
    image: CameraImage,
    description:
      "Offering high-quality cameras to meet your surveillance requirements.",
  },
  {
    title: "Printing Services",
    image: PrintingImage,
    description:
      "Providing professional printing services with high-quality results for personal and business needs.",
  },
  {
    title: "Photocopying Services",
    image: PhotocopyImage,
    description:
      "Delivering fast and reliable photocopying services with attention to detail.",
  },
];

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="services-page"
    >
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <motion.h2
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="services-title"
            >
              Our Services
            </motion.h2>
            <p className="services-description">
              Discover the diverse range of professional services we offer to
              meet your electronic and business needs.
            </p>
          </Col>
        </Row>
        <Row>
          {services.map((service, index) => (
            <Col md={6} lg={3} key={index} className="mb-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="service-card">
                  <Card.Body className="text-center">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="service-image"
                    />
                    <Card.Title className="service-title">
                      {service.title}
                    </Card.Title>
                    <Card.Text className="service-description">
                      {service.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </motion.div>
  );
};

export default Services;

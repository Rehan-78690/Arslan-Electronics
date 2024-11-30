import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./../../assets/css/aboutus.css";
import image1 from "./../../assets/images/image1.jpg";
import image2 from "./../../assets/images/image2.jpg";
import image3 from "./../../assets/images/image3.jpg";

const Aboutus = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const sections = [
    {
      id: "about-arslan-electronics",
      title: "About Arslan Electronics",
      description:
        "Arslan Electronics is your trusted partner in Rawalakot, AJK, for high-quality electronic goods and services. From custom-manufactured UPS systems to specialized cameras and reliable printing and photocopying services, we are dedicated to meeting all your electronic and business needs. With a focus on customer satisfaction, we deliver excellence every step of the way.",
      image: image1,
      imageFirst: false,
    },
    {
      id: "our-mission",
      title: "Our Mission",
      description:
        "Our mission is to provide innovative and reliable electronic solutions that cater to the diverse needs of our community. We are committed to offering top-notch products and services that enhance convenience, reliability, and quality of life for our customers.",
      image: image2,
      imageFirst: true,
    },
    {
      id: "why-choose-us",
      title: "Why Choose Us",
      description:
        "At Arslan Electronics, we pride ourselves on delivering personalized solutions, from custom UPS systems to premium cameras and professional printing services. Our unwavering commitment to quality, affordability, and customer satisfaction makes us the go-to choice for electronics and related services in Rawalakot.",
      image: image3,
      imageFirst: false,
    },
  ];

  const handleLearnMore = (id) => {
    navigate(`/about-details/${id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="about-us-page"
    >
      <Container>
        {sections.map((section, index) => (
          <Row
            className={`align-items-center section ${
              section.imageFirst ? "flex-row-reverse" : ""
            }`}
            key={index}
          >
            <Col md={6} className="text-center">
              <motion.h2
                initial={{ x: section.imageFirst ? 100 : -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="section-title"
              >
                {section.title}
              </motion.h2>
              <motion.p
                initial={{ x: section.imageFirst ? 100 : -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="section-description"
              >
                {section.description}
              </motion.p>
              <Button
                variant="primary"
                className="cta-button"
                onClick={() => handleLearnMore(section.id)}
              >
                Learn More
              </Button>
            </Col>
            <Col md={6} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
              >
                <Image
                  src={section.image}
                  alt={section.title}
                  className="about-image"
                  fluid
                />
              </motion.div>
            </Col>
          </Row>
        ))}
      </Container>
    </motion.div>
  );
};

export default Aboutus;

import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import "./../assets/css/aboutdetailspage.css";
import image1 from "./../assets/images/image1.jpg";
import image2 from "./../assets/images/image2.jpg";
import image3 from "./../assets/images/image1.jpg";

const AboutDetails = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();

  const sections = [
    {
      id: "about-arslan-electronics",
      title: "About Arslan Electronics",
      description:
        "Arslan Electronics is a trusted name in Rawalakot, AJK, Pakistan, providing a wide range of high-quality electronic products and reliable services. Specializing in UPS systems custom-designed to meet unique client requirements, we cater to households, businesses, and industries. Our offerings extend to specialized cameras and essential office services, including professional printing and photocopying. With a dedication to customer satisfaction, we stand as a one-stop solution for diverse electronic needs.",
      image: image1,
    },
    {
      id: "our-mission",
      title: "Our Mission",
      description:
        "At Arslan Electronics, our mission is to deliver top-notch electronic solutions tailored to our customers' needs. We strive to uphold quality, innovation, and exceptional service while contributing to the technological advancement of our community. Our goal is to be a reliable partner, ensuring that every customer experiences the best in convenience and performance.",
      image: image2,
    },
    {
      id: "why-choose-us",
      title: "Why Choose Us",
      description:
        "At Arslan Electronics, we deliver excellence that sets us apart. Our expertise in crafting custom UPS systems ensures solutions tailored to your specific needs, offering unmatched reliability and efficiency. With a diverse range of high-quality electronic goods and specialized cameras, we provide everything you need under one roof. Our additional services, such as professional printing and photocopying, are designed to add value and convenience for our customers. Committed to quality, innovation, and customer satisfaction, we go the extra mile to ensure every experience with us is nothing short of five-star. Choose Arslan Electronics, where quality meets trust.",
      image: image3,
    },
  ];

  const section = sections.find((section) => section.id === id);

  if (!section) {
    return <p>Section not found</p>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="about-details-page"
    >
      <Container>
        <Row className="align-items-center details-section">
          <Col md={6} className="text-center">
            <motion.h2
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="details-title"
            >
              {section.title}
            </motion.h2>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="details-description"
            >
              {section.description}
            </motion.p>
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
                className="details-image"
                fluid
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default AboutDetails;

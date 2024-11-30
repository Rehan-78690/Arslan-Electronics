import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./../../assets/css/projects.css";

const projects = [
  {
    id: 1,
    title: "Custom Built LED Solutions",
    description: "Designed and developed custom LED lighting systems tailored to client specifications, ensuring energy efficiency and premium quality.",
    image: require('./../../assets/ProjectImages/project1/image1.jpg'),
  },
  {
    id: 2,
    title: "UPS Custom Manufacturing",
    description: "Manufactured and delivered reliable UPS systems customized for clients, ensuring seamless power backup solutions.",
    image: require('./../../assets/ProjectImages/project8/image3.jpg'),
  },
  {
    id: 3,
    title: "Home Wiring Services",
    description: "Provided professional home and office wiring services with a focus on safety, efficiency, and affordability.",
    image: require('./../../assets/ProjectImages/project5/wiring.jpg'),
  },
  {
    id: 4,
    title: "Electronics Repair Center",
    description: "Expert repair services for a wide range of electronics, including LEDs, LCDs, and other home appliances.",
    image: require('./../../assets/ProjectImages/project4/repair.jpg'),
  },
  {
    id: 5,
    title: "Printing and Photocopying Services",
    description: "Offered high-quality printing and photocopying solutions for students, businesses, and local clients.",
    image: require('./../../assets/ProjectImages/project6/print1.jpg'),
  },
  {
    id: 6,
    title: "Surveillance Camera Installation",
    description: "Installed specialized surveillance cameras with advanced features, ensuring reliable security for homes and businesses.",
    image: require('./../../assets/ProjectImages/project7/camera4.jpg'),
  },
];


const ProjectsPage = () => {
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/project-details/${id}`);
  };

  return (
    <Container className="projects-page mt-5">
      <h1 className="text-center mb-4">Our works</h1>
      <Row>
        {projects.map((project) => (
          <Col md={6} lg={4} key={project.id} className="mb-4">
            <Card className="project-card shadow-sm border-0">
              <Card.Img
                variant="top"
                src={project.image}
                className="project-image rounded-top"
                loading="lazy"
              />
              <Card.Body className="text-center">
                <Card.Title>{project.title}</Card.Title>
                <Card.Text className="text-muted">
                  {project.description}
                </Card.Text>
                <Button
                  variant="outline-primary"
                  onClick={() => handleViewDetails(project.id)}
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectsPage;

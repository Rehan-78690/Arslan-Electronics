import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import "./../../assets/css/team.css";

const teamMembers = [
  {
    name: "Arslan Khan",
    role: "Owner | Electrical Engineer",
    image: require('./../../assets/teamImages/Arslan.jpeg'),
    description: "Highly skilled electrical engineer and owner of the shop, specializing in custom-built electronics and innovative power solutions.",
  },
  {
    name: "Waseem Akhter",
    role: "Salesman | Repair Technician",
    image: require('./../../assets/teamImages/waseem.jpeg'),
    description: "A dedicated repair technician and skilled salesman , ensuring complete customer satisfaction with expertise in electronics repair.",
  },
];


const Team = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="team-page"
    >
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <motion.h2
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="team-title"
            >
              Meet Our Team
            </motion.h2>
            <p className="team-description">
              Get to know the professionals behind our success.
            </p>
          </Col>
        </Row>
        <Row>
          {teamMembers.map((member, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="team-card">
<Image
  src={member.image}
  alt={member.name}
  roundedCircle
  width={250}
  height={250}
  className="mx-auto mt-3"
  style={{ objectFit: "cover" }}
  loading="lazy"
/>
                  {/* <Card.Img
                    variant="top"
                    src={member.image}
                    alt={member.name}
                    className="team-image rounded-circle mx-auto mt-3"
                  /> */}
                  <Card.Body className="text-center">
                    <Card.Title className="team-name">{member.name}</Card.Title>
                    <Card.Subtitle className="team-role">
                      {member.role}
                    </Card.Subtitle>
                    <Card.Text className="team-description">
                      {member.description}
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

export default Team;

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Service.css"; // keep CSS filename same as before

const services = [
  {
    title: "Residential Construction",
    description: "High-quality residential homes built with modern designs.",
  },
  {
    title: "Commercial Construction",
    description: "Reliable solutions for offices, malls, and business centers.",
  },
  {
    title: "Interior Design",
    description: "Creative and functional interior spaces with modern aesthetics.",
  },
  {
    title: "Renovation & Remodeling",
    description: "Upgrade and remodel your existing property with expert touch.",
  },
  {
    title: "Project Management",
    description: "Professional project management to deliver on time and budget.",
  },
  {
    title: "Architecture Services",
    description: "Innovative and sustainable architectural planning & design.",
  },
];

const Service = () => {
  return (
    <section className="services-section">
      <Container>
        <h2 className="text-center mb-5">Our Services</h2>
        <Row>
          {services.map((service, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="service-card shadow-lg text-center">
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Service;

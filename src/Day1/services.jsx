import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function LandingPage() {
  return (
    <div className="LandingPage-Background">
      <Container className="container-background">
        <Row className="white-text">
          <Col></Col>
          <Col xs={8}>
            <h3 className="headline-center">Services</h3>
            <p className="subtext-center">
              Our vision is simple. We want to create websites and applications
              with both high quality design and easy-to-access content. The
              finished product will be totally unique and represent awesomeness.
            </p>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;

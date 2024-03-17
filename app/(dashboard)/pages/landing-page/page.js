import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const LandingPage = () => {
  return (
    <Container className="d-flex vh-100">
      <Row className="m-auto align-self-center">
        <Col className="text-center">
          <h1 classname='mb-5'>Cipher</h1>
          <p>The Infrastructure of the Modern Music Industry</p>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
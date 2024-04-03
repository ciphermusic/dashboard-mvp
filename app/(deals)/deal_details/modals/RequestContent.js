import React, { useState } from 'react';
import { Accordion, Card, Button, Container, Row, Col, Form } from 'react-bootstrap';
import { CheckAll } from  'react-bootstrap-icons';

const RequestContent = () => {
  const [activeKey, setActiveKey] = useState(null); // Initially, the first item is active

  // State initialization should be outside the return statement
  const [approvedFirst, setApprovedFirst] = useState(false);
  const [approvedSecond, setApprovedSecond] = useState(false);
  const [approvedThird, setApprovedThird] = useState(false);
  const [approvedFourth, setApprovedFourth] = useState(false);

  // Function definitions should also be outside the return statement
  const handleClick = (eventKey) => {
    console.log("Approve button clicked!")
    if (eventKey === "1") {
      setApprovedFirst(true);
    } else if (eventKey === "2") {
      setApprovedSecond(true);
    } else if (eventKey === "3") {
      setApprovedThird(true);
    } else if (eventKey === "4") {
      setApprovedFourth(true);
    }
    setActiveKey(null);
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={12}>
          <p>Details about the Request...</p>
          <Accordion activeKey={activeKey} onSelect={(selectedKey) => setActiveKey(selectedKey)}>
            <Accordion.Item eventKey="1">
            <Card>
              <Accordion.Header>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '95%' }}>
                  Song Details
                  {approvedFirst && <CheckAll color="green" size={20}/>}
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <Card.Body>
                  {/* Replace these placeholders with actual content */}
                  <p>Song Title: Example</p>
                  <p>Artist/Recording: Example</p>
                  <p>Publisher(s): Example</p>
                </Card.Body>
                <Form.Group controlId="productionDetailsFeedback">
                    <Form.Label>Feedback for Song Details</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                <Button className="mt-2" onClick={() => handleClick("1")}>Approve</Button>
              </Accordion.Body>
            </Card>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
            <Card>
              <Accordion.Header>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '95%' }}>
                  Usage Description
                  {approvedSecond && <CheckAll color="green" size={20}/>}
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <Card.Body>
                  {/* Replace these placeholders with actual content */}
                  <p>Description of Song Use: Example</p>
                  <p>Timing of Song Use: Example</p>
                </Card.Body>
                <Form.Group controlId="productionDetailsFeedback">
                    <Form.Label>Feedback for Usage Description</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                <Button className="mt-2" onClick={() => handleClick("2")}>Approve</Button>
              </Accordion.Body>
            </Card>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
            <Card>
              <Accordion.Header>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '95%' }}>
                  Rights & Permissions
                  {approvedThird && <CheckAll color="green" size={20}/>}
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <Card.Body>
                  {/* Replace these placeholders with actual content */}
                  <p>Media Rights Requesting: Example</p>
                  <p>Term: Example</p>
                  <p>Territory: Example</p>
                </Card.Body>
                <Form.Group controlId="productionDetailsFeedback">
                    <Form.Label>Feedback for Rights & Permissions</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                <Button className="mt-2" onClick={() => handleClick("3")}>Approve</Button>
              </Accordion.Body>
            </Card>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
            <Card>
              <Accordion.Header> 
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '95%' }}>
                  Production Details
                  {approvedFourth && <CheckAll color="green" size={20}/>}
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <Card.Body>
                  {/* Replace these placeholders with actual content */}
                  <p>Production Company Name: Example</p>
                  <p>Production Synopsis: Example</p>
                </Card.Body>
                <Form.Group controlId="productionDetailsFeedback">
                    <Form.Label>Feedback for Production Details</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                <Button className="mt-2" onClick={() => handleClick("4")}>Approve</Button>
              </Accordion.Body>
            </Card>
            </Accordion.Item>
          </Accordion>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '12px' }}>
            {(approvedFirst && approvedSecond && approvedThird && approvedFourth) ? (
              <Button>Approve Request</Button>
            ) : (
              <Button>Request More Information</Button>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default RequestContent;

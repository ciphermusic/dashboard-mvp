import React, { useState } from 'react';
import { Accordion, Card, Button, Container, Row, Col, Form } from 'react-bootstrap';
import { CheckAll } from  'react-bootstrap-icons';
import Lottie from "lottie-react";
import CheckMark from "../../../../public/images/animations/Checkmark.json";

const RequestContent = ({dealState, setDealState, setShowModal}) => {
  console.log("Deal state: " + dealState);
  console.log("Set Deal state: " + setDealState);
  const [activeKey, setActiveKey] = useState(null); // Initially, the first item is active

  // State initialization should be outside the return statement
  const [approvedFirst, setApprovedFirst] = useState(false);
  const [approvedSecond, setApprovedSecond] = useState(false);
  const [approvedThird, setApprovedThird] = useState(false);
  const [approvedFourth, setApprovedFourth] = useState(false);

  const [moreInformationRequested, setMoreInformationRequested] = useState(false);

  const [approvedAll, setApprovedAll] = useState(false);

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

  const handleClickDeselect = (eventKey) => {
    console.log("Approve button clicked!")
    if (eventKey === "1") {
      setApprovedFirst(false);
    } else if (eventKey === "2") {
      setApprovedSecond(false);
    } else if (eventKey === "3") {
      setApprovedThird(false);
    } else if (eventKey === "4") {
      setApprovedFourth(false);
    }
    setActiveKey(null);
  };

  const handleApproveRequest = () => {
    setApprovedAll(true);

    setTimeout(() => {
      setDealState(dealState + 1);
      setShowModal(false);
    }, 800); // 500 milliseconds = 0.5 seconds
  }

  const handleMoreInformation = () => {
    console.log("Request More Information button clicked!")
    setMoreInformationRequested(true);
    setActiveKey(null);
  }

  return (
    approvedAll ? (
      <Container className="mt-5">
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        // height: '100vh' // This assumes you want to center it in the viewport. Adjust the height as necessary.
      }}>
        <Lottie animationData={CheckMark} style={{ width: '25%', height: '25%' }} />
      </div>
      </Container>
    ) : (
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
                  <p>Song Title: Example</p>
                  <p>Artist/Recording: Example</p>
                  <p>Publisher(s): Example</p>
                </Card.Body>
                <Form.Group controlId="productionDetailsFeedback">
                    <Form.Label>Feedback for Song Details</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                {approvedFirst ? (
                  <Button className="mt-2" onClick={() => handleClickDeselect("1")}>Cancel</Button>
                ) : (
                  <Button className="mt-2" onClick={() => handleClick("1")}>Approve</Button>
                
                )}
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
                  <p>Description of Song Use: Example</p>
                  <p>Timing of Song Use: Example</p>
                </Card.Body>
                <Form.Group controlId="productionDetailsFeedback">
                    <Form.Label>Feedback for Usage Description</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                {approvedSecond ? (
                  <Button className="mt-2" onClick={() => handleClickDeselect("2")}>Cancel</Button>
                ) : (
                  <Button className="mt-2" onClick={() => handleClick("2")}>Approve</Button>
                )}
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
                  <p>Media Rights Requesting: Example</p>
                  <p>Term: Example</p>
                  <p>Territory: Example</p>
                </Card.Body>
                <Form.Group controlId="productionDetailsFeedback">
                    <Form.Label>Feedback for Rights & Permissions</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                {approvedThird ? (
                  <Button className="mt-2" onClick={() => handleClickDeselect("3")}>Cancel</Button>
                ) : (
                  <Button className="mt-2" onClick={() => handleClick("3")}>Approve</Button>
                )}
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
                  <p>Production Company Name: Example</p>
                  <p>Production Synopsis: Example</p>
                </Card.Body>
                <Form.Group controlId="productionDetailsFeedback">
                  <Form.Label>Feedback for Production Details</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                {approvedFourth ? (
                  <Button className="mt-2" onClick={() => handleClickDeselect("4")}>Cancel</Button>
                ) : (
                  <Button className="mt-2" onClick={() => handleClick("4")}>Approve</Button>
                )}
              </Accordion.Body>
            </Card>
            </Accordion.Item>
          </Accordion>
          
          {(approvedFirst && approvedSecond && approvedThird && approvedFourth) ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '12px' }}>
              <Button onClick={handleApproveRequest}>Approve Request</Button>
            </div>
          ) : (
            <>
              {moreInformationRequested ? (
                <div style={{ marginTop: '12px' }}>
                  <Form.Group controlId="moreInformation">
                    <Form.Label>More Information Requested</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '12px' }}>
                      <Button type="submit">Submit Request</Button>
                    </div>
                  </Form.Group>
                </div>
              ) : (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '12px' }}>
                  <Button onClick={handleMoreInformation}>Request More Information</Button>
                </div>
              )}         
            </>
          )}
        </Col>
      </Row>
    </Container>
  ));
}

export default RequestContent;

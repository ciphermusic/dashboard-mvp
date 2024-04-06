import React, { useState } from 'react';
import { Accordion, Card, Button, Container, Row, Col, Form } from 'react-bootstrap';
import { CheckAll } from  'react-bootstrap-icons';
import Lottie from "lottie-react";
import CheckMark from "../../../../public/images/animations/Checkmark.json";
import { postDealState } from '../../../api/api_client';

const RequestContent = ({dealState, setDealState, setShowModal}) => {
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

  const handleApproveRequest = async () => {
    setApprovedAll(true);
    
    const error = await postDealState(2);

    if (error) {
      console.log("Error approving request")
    } else {
      setTimeout(() => {
        setDealState(2);
        setShowModal(false);
      }, 800); // 500 milliseconds = 0.5 seconds
    }
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
      }}>
        <Lottie animationData={CheckMark} style={{ width: '25%', height: '25%' }} loop="false" />
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
                  <p>Song Title: Everybody</p>
                  <p>Artist/Recording: Don Broco</p>
                  <p>Song Writer(s): Robert Damiani, Simon James Delaney, Matthew Stephen Donnelly, Thomas David Doyle, [Daniel Jamie Lancaster], Jason Keith Perry</p>
                  <p>Publisher(s): BMG Rights Management, [Amlor Publishing Limited, Universal Songs of Polygram International Inc, Dan Lancaster Productions Limited, Songs of Kobalt Publishing Limited]</p>
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
                  <p>Description of Song Use: The song &quot;Everybody&quot; by Don Broco sets a vibrant and energetic tone for our commercial, which showcases the new Ford F-150 in a series of dynamic, high-energy scenes. The track begins playing as the truck is seen traversing various terrains - city streets, mountain roads, and desert landscapes. As the beat of the song picks up, the commercial cuts to scenes of the truck&apos;s interior features, highlighting its robustness and versatility. The song underlines the theme of empowerment and going beyond limits, aligning perfectly with the Ford F-150&apos;s brand message of strength, reliability, and adventure.</p>
                  <p>Timing of Song Use: Full length (up to 3 minutes)</p>
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
                  <p>Media Rights Requesting: TV, Internet, Social Media</p>
                  <p>Term: 2 years</p>
                  <p>Territory: Worldwide</p>
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
                  <p id="info" style={{ whiteSpace: 'pre-wrap' }}>Production Company Name: 
                  Ford Motor Company
                  1 American Rd, Dearborn, MI 48126
                  Contact: Marketing Department
                  Email: marketing@ford.com
                  Phone: 1-800-392-3673</p>
                  <p>Production Name: &quot;Unleash the New F-150&quot;</p>
                  <p>Production Synopsis: This commercial introduces the new Ford F-150, emphasizing its advanced features, durability, and design. Through a sequence of visually captivating scenes, the commercial aims to convey the essence of freedom and the spirit of adventure that the F-150 inspires. Targeting a wide audience of truck enthusiasts, families, and adventurers, the commercial will showcase the vehicle&apos;s capabilities in handling different lifestyles and adventures, reinforcing the Ford F-150&apos;s position as America&apos;s best-selling truck.</p>
                  <p>Production Release / Air Date: TBD</p>
                  <p>Additional Information: The song will primarily be used within the commercial framework as outlined, with potential extensions into behind-the-scenes content and promotional material for social media. We are open to negotiating terms for an extended usage period or broader media coverage as needed.</p>
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

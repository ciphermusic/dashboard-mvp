import React, { useState } from 'react';
import { Accordion, Card, Button, Container, Row, Col, Form } from 'react-bootstrap';
import { CheckAll, Chat } from  'react-bootstrap-icons';
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

  const [feedback, setFeedback] = useState({
    block1: { text: ''},
    block2: { text: ''},
    block3: { text: ''},
    block4: { text: ''},
  });

  const handleFeedbackChange = (blockId, text) => {
    setFeedback(prev => ({ ...prev, [blockId]: { text } }));
  };

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
                  <div>
                    {feedback.block1.text && <Chat color="blue" size={20} style={{marginRight: "20px"}}/>}
                    {approvedFirst && <CheckAll color="green" size={20}/>}
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <Card.Body>
                  <p><strong>Song Title:</strong> Everybody</p>
                  <p><strong>Artist/Recording:</strong> Don Broco</p>
                </Card.Body>
                <Form.Group controlId="productionDetailsFeedback">
                  <Form.Label>Feedback for Song Details</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={feedback.block1.text}
                    onChange={(e) => handleFeedbackChange('block1', e.target.value)}
                  />
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
                  <div>
                    {feedback.block2.text && <Chat color="blue" size={20} style={{marginRight: "20px"}}/>}
                    {approvedSecond && <CheckAll color="green" size={20}/>}
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <Card.Body>
                  <p><strong>Description of Song Use:</strong> The song &quot;Everybody&quot; by Don Broco sets a vibrant and energetic tone for our commercial, which showcases the new Ford F-150 in a series of dynamic, high-energy scenes. The track begins playing as the truck is seen traversing various terrains - city streets, mountain roads, and desert landscapes. As the beat of the song picks up, the commercial cuts to scenes of the truck&apos;s interior features, highlighting its robustness and versatility. The song underlines the theme of empowerment and going beyond limits, aligning perfectly with the Ford F-150&apos;s brand message of strength, reliability, and adventure.</p>
                  <p><strong>Timing of Song Use:</strong> Full length (up to 3 minutes)</p>
                </Card.Body>
                <Form.Group controlId="productionDetailsFeedback">
                    <Form.Label>Feedback for Usage Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={feedback.block2.text}
                      onChange={(e) => handleFeedbackChange('block2', e.target.value)}
                    />
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
                  <div>
                    {feedback.block3.text && <Chat color="blue" size={20} style={{marginRight: "20px"}}/>}
                    {approvedThird && <CheckAll color="green" size={20}/>}
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <Card.Body>
                  <p><strong>Media Rights Requesting:</strong> TV, Internet, Social Media</p>
                  <p><strong>Term:</strong> 2 years</p>
                  <p><strong>Territory:</strong> Worldwide</p>
                </Card.Body>
                <Form.Group controlId="productionDetailsFeedback">
                    <Form.Label>Feedback for Rights & Permissions</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={feedback.block3.text}
                      onChange={(e) => handleFeedbackChange('block3', e.target.value)}
                    />
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
                  <div>
                    {feedback.block4.text && <Chat color="blue" size={20} style={{marginRight: "20px"}}/>}
                    {approvedFourth && <CheckAll color="green" size={20}/>}
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <Card.Body>
                  <div style={{ lineHeight: '1.2', margin: '0' }}>
                    <p id="info" style={{ marginBottom: '5px' }}><strong>Production Company Information: </strong></p>
                    <p style={{ marginBottom: '5px' }}>Ford Motor Company</p>
                    <p style={{ marginBottom: '5px' }}>1 American Rd, Dearborn, MI 48126</p>
                    <p style={{ marginBottom: '5px' }}>Contact: Marketing Department</p>
                    <p style={{ marginBottom: '5px' }}>Email: marketing@ford.com</p>
                  </div>
                  
                  <p><strong>Phone:</strong> 1-800-392-3673</p>
                  <p><strong>Production Name:</strong> &quot;Unleash the New F-150&quot;</p>
                  <p><strong>Production Synopsis:</strong> This commercial introduces the new Ford F-150, emphasizing its advanced features, durability, and design. Through a sequence of visually captivating scenes, the commercial aims to convey the essence of freedom and the spirit of adventure that the F-150 inspires. Targeting a wide audience of truck enthusiasts, families, and adventurers, the commercial will showcase the vehicle&apos;s capabilities in handling different lifestyles and adventures, reinforcing the Ford F-150&apos;s position as America&apos;s best-selling truck.</p>
                  <p><strong>Production Release / Air Date:</strong> TBD</p>
                  <p><strong>Additional Information:</strong> The song will primarily be used within the commercial framework as outlined, with potential extensions into behind-the-scenes content and promotional material for social media. We are open to negotiating terms for an extended usage period or broader media coverage as needed.</p>
                </Card.Body>
                <Form.Group controlId="productionDetailsFeedback">
                  <Form.Label>Feedback for Production Details</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={feedback.block4.text}
                    onChange={(e) => handleFeedbackChange('block4', e.target.value)}
                  />
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

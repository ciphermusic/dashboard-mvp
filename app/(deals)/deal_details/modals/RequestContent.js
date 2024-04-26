import React, { useState } from 'react';
import { Accordion, Card, Button, Container, Row, Col, Form } from 'react-bootstrap';
import { CheckAll, Chat } from  'react-bootstrap-icons';
import Lottie from "lottie-react";
import CheckMark from "../../../../public/images/animations/Checkmark.json";
import { postDealState, postDealPrice } from '../../../api/api_client';

const RequestContent = ({dealState, setDealState, setShowModal, currentPrice, setCurrentPrice}) => {
  const [activeKey, setActiveKey] = useState(null); // Initially, the first item is active

  // State initialization should be outside the return statement
  const [approvedFirst, setApprovedFirst] = useState(false);
  const [approvedSecond, setApprovedSecond] = useState(false);
  const [approvedThird, setApprovedThird] = useState(false);
  const [approvedFourth, setApprovedFourth] = useState(false);
  const [approvedFifth, setApprovedFifth] = useState(false);

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
    } else if (eventKey === "5") {  
      setApprovedFifth(true);
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
    } else if (eventKey === "5") {
      setApprovedFifth(false);
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
  
  const [price, setPrice] = useState(currentPrice === 0 ? '' : currentPrice);
  const [showError, setShowError] = useState(false);

  const handleSubmitPrice = async (e) => {
    e.preventDefault();

    if (!price) {
      setShowError(true);
    } else {
      setShowError(false);
      handleClick("5")

      // const user = await getUserId();
      const dealPriceError = await postDealPrice({userId: 1, price: price});

      setCurrentPrice(price)
    }
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
                  <p><strong>Song Title:</strong> Calm Down</p>
                  <p><strong>Artist/Recording:</strong> Rema</p>
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
                  <p><strong>Description of Song Use:</strong> The song &lsquo;Calm Down&rsquo; by Rema plays in the background throughout the commercial. The commercial features a series of beautiful, serene scenes of the resort and its surroundings, including beaches, guest rooms, and spa facilities. The upbeat and vibrant tone of the song enhances the lively and inviting atmosphere of the resort.</p>
                  <p><strong>Timing of Song Use:</strong> Up to 30 seconds</p>
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
                  <p><strong>Media Rights Requesting:</strong> The commercial will be aired on television, internet (including social media platforms), and possibly in cinema ads.</p>
                  <p><strong>Term:</strong> 2 years</p>
                  <p><strong>Territory:</strong> United States</p>
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
                    <p style={{ marginBottom: '5px' }}>Marriott International</p>
                    <p style={{ marginBottom: '5px' }}>Bethesda, MD 20817</p>
                    <p style={{ marginBottom: '5px' }}>USA</p>
                    <p style={{ marginBottom: '5px' }}>10400 Fernwood Road</p>
                    <p style={{ marginBottom: '5px' }}>Contact: Jane Doe, Marketing Director</p>
                    <p style={{ marginBottom: '5px' }}>Email: jane.doe@marriott.com</p>
                  </div>
                  
                  <p><strong>Phone:</strong> +1 301-380-3000</p>
                  <p><strong>Production Synopsis:</strong> The commercial showcases the luxurious amenities and breathtaking natural beauty of Marriott&apos;s Waikiki Beach Resort and Spa. Through stunning visuals and vibrant music, it invites viewers to experience the ultimate relaxation and enjoyment that awaits at this premier destination.</p>
                  <p><strong>Production Release / Air Date:</strong> Expected release in June 2024</p>
                  <p><strong>Additional Information:</strong> The commercial aims to boost bookings and enhance the resort&apos;s brand image by appealing to a wide demographic of travelers looking for a luxurious and memorable vacation experience. This filled-out form is based on plausible assumptions for a typical TV commercial for a resort. Be sure to adjust or provide more accurate details as necessary!</p>
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
            <Accordion.Item eventKey="5">
            <Card>
              <Accordion.Header> 
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '95%' }}>
                  Set Aside Price
                  <div>
                    {approvedFifth && <CheckAll color="green" size={20}/>}
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <Container className="mt-5">
                  <form onSubmit={handleSubmitPrice}>
                    <div className="form-group">
                      <label htmlFor="priceInput">Price</label>
                      <input
                        type="number"
                        className="form-control"
                        id="priceInput"
                        placeholder="Enter aside price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)} // Update state on input change
                      />
                      {showError && <div className="text-danger">Please enter a price.</div>} {/* Error message */}
                    </div>
                    {approvedFifth ? (
                      <Button className="mt-2" onClick={() => handleClickDeselect("5")}>Cancel</Button>
                    ) : (
                      <button type="submit" className="btn btn-primary mt-3">Confirm Price</button>
                    )}
                  </form>
                </Container>
              </Accordion.Body>
            </Card>
            </Accordion.Item>
          </Accordion>
          
          {(approvedFirst && approvedSecond && approvedThird && approvedFourth && approvedFifth) ? (
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

'use client'

// import node module libraries
import { Fragment, useState, useEffect } from "react";
import { Row, Col, Container, Card, ProgressBar, ModalHeader } from 'react-bootstrap';


import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import DealTimelineElementType from 'data/types/DealTimelineElementType';
import ModalContent from "./modals/ModalContent";
import { Modal, Button } from 'react-bootstrap';
import { VectorPen, CreditCardFill, GearWideConnected, SendCheck, HandThumbsUpFill } from "react-bootstrap-icons";

import 'react-vertical-timeline-component/style.min.css';

import { getDealState, getCurrentPrice, getGenerateLicense } from '../../api/api_client';

const Deals = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [dealState, setDealState] = useState(-1);

  const [currentPrice, setCurrentPrice] = useState(0);

  const [generateLicense, setGenerateLicense] = useState(false);

  useEffect(() => {
    const fetchDealState = async () => {
      const price = await getCurrentPrice();

      let maxValue = null;
      for (const [key, value] of Object.entries(price)) {
        // If maxValue is null or the current value is greater than maxValue, update maxValue and maxKey
        if (maxValue === null || value > maxValue) {
          maxValue = value;
        }
      }

      if (maxValue !== null) {
        setCurrentPrice(maxValue);
      }

      const generateLicense = await getGenerateLicense();
      setGenerateLicense(generateLicense);

      const state = await getDealState();
      setDealState(state);
    }
    fetchDealState();
  }, []);

  const handleShowModal = (type) => {
    setModalType(type);
    setShowModal(true);
    console.log("Setting modal type to", type);
  };

  const handleCloseModal = () => setShowModal(false);
  
  return ( dealState < 0 ? 
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="spinner-border" role="status" style={{ width: '3rem', height: '3rem', borderWidth: '0.3rem' }}>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
    : (
    <div>
    <Fragment>
    <div className="bg-primary pt-10 pb-21"></div>
    <Container fluid className="mt-n22 px-6">
        <Row>
          <Col lg={12} md={12} xs={12}>
              {/* Page header */}
              <div>
                  <div className="d-flex justify-content-center">
                      <div className="mb-3 mb-lg-0">
                          <h3 className="mb-2 text-white" style={{ fontSize: '18px'}}>
                            {'Song Name'}
                          </h3>
                          <h3 className="mb-0 text-white" style={{ fontSize: '36px', fontWeight: 'bold', paddingRight: '12px' }}>
                            {'"Everybody" -'}
                          </h3>
                      </div>
                      <div className="mb-3 mb-lg-0">
                          <h3 className="mb-2 text-white" style={{ fontSize: '18px' }}>
                            {'Requester'}
                          </h3>
                          <h3 className="mb-0 text-white" style={{ fontSize: '36px', fontWeight: 'bold', paddingRight: '12px'}}>
                            {'Ford Motor Company -'}
                          </h3>
                      </div>
                      <div className="mb-3 mb-lg-0">
                          <h3 className="mb-2 text-white" style={{ fontSize: '18px'}}>
                            {'Deal Code'}
                          </h3>
                          <h3 className="mb-0 text-white" style={{ fontSize: '36px', fontWeight: 'bold', paddingRight: '12px' }}>
                            {'#SF031924'}
                          </h3>
                      </div>
                  </div>
              </div>
          </Col>
            <Row className="justify-content-center">
                <Col xl={4} lg={6} md={12} xs={12} className="mt-6" key={"abc"}>
                  <Card>
                      <Card.Body>
                          <div className="d-flex justify-content-between align-items-center mb-3">
                              <div>
                                  <h4 className="mb-0">Requester Budget</h4>
                              </div>
                          </div>
                          <div>
                              <h1 className="fw-bold">$265k - 340k</h1>
                              {/* <p className="mb-0" dangerouslySetInnerHTML={{ __html: info.statInfo}}></p> */}
                          </div>
                      </Card.Body>
                  </Card>
                </Col>
                <Col xl={4} lg={6} md={12} xs={12} className="mt-6" key={"abc"}>
                  <Card>
                      <Card.Body>
                          <div className="d-flex justify-content-between align-items-center mb-3">
                              <div>
                                  <h4 className="mb-0">Current Aside Price</h4>
                              </div>
                          </div>
                          <div>
                              <h1 className="fw-bold">{currentPrice == 0 ? "Price Not Set" : "$" + currentPrice}</h1>
                          </div>
                      </Card.Body>
                  </Card>
                </Col>
                <Col xl={4} lg={6} md={12} xs={12} className="mt-6" key={"abc"}>
                  <Card>
                      <Card.Body>
                          <div className="d-flex justify-content-between align-items-center mb-3">
                              <div>
                                  <h4 className="mb-0">Deadline</h4>
                              </div>
                          </div>
                          <div>
                              <h1 className="fw-bold">05/15/2024</h1>
                          </div>
                      </Card.Body>
                  </Card>
                </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xl={12} lg={6} md={12} xs={12} className="mt-3" key={"abc"}>
                  <Card>
                    <Card.Body>
                        <Row>
                          <div className="align-middle text-dark">
                              <div className="float-start me-3">{Math.round(dealState / 13 * 100)}%</div>
                              <div className="mt-2">
                                  <ProgressBar now={dealState / 13 * 100} style={{ height: '5px' }} />
                              </div>
                          </div>
                        </Row>
                    </Card.Body>
                </Card>
              </Col>
            </Row>
          </Row>

          <Row className="align-items-center justify-content-center g-0">
            <VerticalTimeline layout={'1-column-left'}>
                <VerticalTimelineElement
                  visible = {true}
                  className="vertical-timeline-element--work"
                  date={dealState < 2 ? "Pending Approval" : "Approved on: 12:34 PM ET 03/19/2024"}
                  iconStyle={
                    dealState < 2
                      ? { background: 'rgb(255,186,75,1)', border: '5px solid orange', padding: '2px'}
                      : { background: 'rgba(36,178,109,255)', border: '3px solid lightgreen', padding: '2px'}
                  }
                  icon={
                    <SendCheck/>
                  }
                  
                  style={dealState < 2 ? {} : { opacity: 0.6 }}
                >
                <button onClick={() => handleShowModal(DealTimelineElementType.REQUEST)} style={{ all: 'unset', cursor: 'pointer', width: '100%', color: 'inherit', background: 'inherit' }}>
                    <h3 className="vertical-timeline-element-title">Request Received</h3>
                    <p>
                      Click to view the details of the request.
                    </p>
                </button>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  visible = {true}
                  className="vertical-timeline-element--work"
                  date = {dealState < 4 ? "Pending Approval": "Approved on: 16:12 PM ET 03/29/2024"}
                  // iconStyle={{ background: 'rgb(75,255,96,1)', border: '5px solid lightgreen', padding: '2px'}}
                  iconStyle={
                    dealState < 4
                      ? { background: 'rgb(255,186,75,1)', border: '5px solid orange', padding: '2px'}
                      : { background: 'rgba(36,178,109,255)', border: '3px solid lightgreen', padding: '2px'}
                  }
                  icon={
                    <HandThumbsUpFill/>
                  }
                  style={dealState < 4 ? {} : { opacity: 0.6 }}
                >
                <button onClick={() => handleShowModal(DealTimelineElementType.NEGOTIATION_MASTER)} style={{ all: 'unset', cursor: 'pointer', width: '100%', color: 'inherit', background: 'inherit' }}>
                  <h3 className="vertical-timeline-element-title">Negotiation - Master Owner</h3>
                  <p>
                    Click to view the terms proposed by the Master Licensor.
                  </p>
                </button>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  visible = {true}
                  className="vertical-timeline-element--work"
                  date="Approved on: 1:22 PM ET 03/30/2024"
                  iconStyle={
                    dealState < 5
                      ? { background: 'rgb(255,186,75,1)', border: '5px solid orange', padding: '2px'}
                      : { background: 'rgba(36,178,109,255)', border: '3px solid lightgreen', padding: '2px'}
                  }
                  icon={
                    <HandThumbsUpFill/>
                  }
                  style={dealState < 5 ? {} : { opacity: 0.6 }}
                >
                <button onClick={() => handleShowModal(DealTimelineElementType.NEGOTIATION_OTHER)} style={{ all: 'unset', cursor: 'pointer', width: '100%', color: 'inherit', background: 'inherit' }}>
                  <h3 className="vertical-timeline-element-title">Negotiation - Other Owners</h3>
                  <p>
                  Click to view the terms proposed by Publishers, Composers and Other Rights Owners.
                  </p>
                </button>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  visible = {true}
                  className="vertical-timeline-element--work"
                  date="Pending Approval"
                  iconStyle={
                    dealState < 5
                      ? { background: 'rgb(255,186,75,1)', border: '5px solid orange', padding: '2px'}
                      : { background: 'rgba(36,178,109,255)', border: '3px solid lightgreen', padding: '2px'}
                  }
                  icon={
                    <VectorPen />
                  }
                >
                <button onClick={() => handleShowModal(DealTimelineElementType.SIGN_OFF)} style={{ all: 'unset', cursor: 'pointer', width: '100%', color: 'inherit', background: 'inherit' }}>
                  <h3 className="vertical-timeline-element-title">Sign Off</h3>
                  <p>
                    Click to view the drafted contract and status updates.
                  </p>
                </button>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  visible = {true}
                  className="vertical-timeline-element--work"
                  date="Pending Approval"
                  iconStyle={
                    dealState < 5
                      ? { background: 'rgb(255,186,75,1)', border: '5px solid orange', padding: '2px'}
                      : { background: 'rgba(36,178,109,255)', border: '3px solid lightgreen', padding: '2px'}
                  }
                  icon={
                    <CreditCardFill />
                  }
                >
                <button onClick={() => handleShowModal(DealTimelineElementType.PAYMENT)} style={{ all: 'unset', cursor: 'pointer', width: '100%', color: 'inherit', background: 'inherit' }}>
                  <h3 className="vertical-timeline-element-title">Payment</h3>
                  <p>
                    Click to view the drafted invoice and select payment method.
                  </p>
                </button>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </Row>
      </Container>
        <Modal show={showModal} onHide={handleCloseModal} size="xl" centered>
          <Modal.Header closeButton>
            <Modal.Title>Detail View</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ModalContent type={modalType} dealState={dealState} setDealState={setDealState} setShowModal={setShowModal} 
              setCurrentPrice={setCurrentPrice} generateLicense={generateLicense} setGenerateLicense={setGenerateLicense}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
          </Modal.Footer>
        </Modal>
    </Fragment>
   </div>
  )
)}

export default Deals
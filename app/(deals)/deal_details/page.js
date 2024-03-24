'use client'
import { Fragment } from "react";
import { Row, Col, Container, Card, ProgressBar } from 'react-bootstrap';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { StatRightTopIcon } from "widgets";

import 'react-vertical-timeline-component/style.min.css';

const Deals = () => {
  return (
    <div>
    <Fragment>
    <div className="bg-primary pt-10 pb-21"></div>
    <Container fluid className="mt-n22 px-6">
        <Row>
          <Col lg={12} md={12} xs={12}>
              {/* Page header */}
              <div>
                  <div className="d-flex justify-content-center align-items-center">
                      <div className="mb-3 mb-lg-0">
                          <h3 className="mb-2  text-white" style={{ fontSize: '18px'}}>
                            {'Song Name'}
                          </h3>
                          <h3 className="mb-0  text-white" style={{ fontSize: '36px', fontWeight: 'bold', paddingRight: '12px' }}>
                            {'"you won\'t even try" - '}
                          </h3>
                      </div>
                      <div className="mb-3 mb-lg-0">
                          <h3 className="mb-2  text-white" style={{ fontSize: '18px' }}>
                            {'Requester'}
                          </h3>
                          <h3 className="mb-0  text-white" style={{ fontSize: '36px', fontWeight: 'bold', paddingRight: '12px'}}>
                            {'Bill Nye -'}
                          </h3>
                      </div>
                      <div className="mb-3 mb-lg-0">
                          <h3 className="mb-2  text-white" style={{ fontSize: '18px'}}>
                            {'Deal Code'}
                          </h3>
                          <h3 className="mb-0  text-white" style={{ fontSize: '36px', fontWeight: 'bold', paddingRight: '12px' }}>
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
                                <h4 className="mb-0">Total Stakeholders</h4>
                            </div>
                        </div>
                        <div>
                            <h1 className="fw-bold">8</h1>
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
                            <div className="float-start me-3">45%</div>
                            <div className="mt-2">
                                <ProgressBar now="45" style={{ height: '5px' }} />
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
                  contentStyle={{ background: 'rgb(97,75,255,255)', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid  rgb(97,75,255,255)' }}
                  date="2011 - present"
                  iconStyle={{ background: 'rgb(97,75,255,255)', color: '#fff' }}
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-1-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002H7.971L6.072 5.385v1.271l1.834-1.318h.065V12h1.312z"/>
                    </svg>
                  }
                >
                  <h3 className="vertical-timeline-element-title" style={{ color: 'white' }}>Creative Director</h3>
                  <h4 className="vertical-timeline-element-subtitle" style={{ color: 'white' }}>Miami, FL</h4>
                  <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  visible = {true}
                  className="vertical-timeline-element--work"
                  date="2010 - 2011"
                  iconStyle={{ background: 'rgb(97,75,255,255)', color: '#fff' }}
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-2-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.646 6.24c0-.691.493-1.306 1.336-1.306.756 0 1.313.492 1.313 1.236 0 .697-.469 1.23-.902 1.705l-2.971 3.293V12h5.344v-1.107H7.268v-.077l1.974-2.22.096-.107c.688-.763 1.287-1.428 1.287-2.43 0-1.266-1.031-2.215-2.613-2.215-1.758 0-2.637 1.19-2.637 2.402v.065h1.271v-.07Z"/>
                    </svg>
                  }
                >
                  <h3 className="vertical-timeline-element-title">Art Director</h3>
                  <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                  <p>
                    Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  visible = {true}
                  className="vertical-timeline-element--work"
                  date="2008 - 2010"
                  iconStyle={{ background: 'rgb(97,75,255,255)', color: '#fff' }}
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-3-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-8.082.414c.92 0 1.535.54 1.541 1.318.012.791-.615 1.36-1.588 1.354-.861-.006-1.482-.469-1.54-1.066H5.104c.047 1.177 1.05 2.144 2.754 2.144 1.653 0 2.954-.937 2.93-2.396-.023-1.278-1.031-1.846-1.734-1.916v-.07c.597-.1 1.505-.739 1.482-1.876-.03-1.177-1.043-2.074-2.637-2.062-1.675.006-2.59.984-2.625 2.12h1.248c.036-.556.557-1.054 1.348-1.054.785 0 1.348.486 1.348 1.195.006.715-.563 1.237-1.342 1.237h-.838v1.072h.879Z"/>
                    </svg>
                  }
                >
                  <h3 className="vertical-timeline-element-title">Web Designer</h3>
                  <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                  <p>
                    User Experience, Visual Design
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  visible = {true}
                  className="vertical-timeline-element--work"
                  date="2008 - 2010"
                  iconStyle={{ background: 'rgb(97,75,255,255)', color: '#fff' }}
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-4-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M7.519 5.057c-.886 1.418-1.772 2.838-2.542 4.265v1.12H8.85V12h1.26v-1.559h1.007V9.334H10.11V4.002H8.176zM6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218"/>
                    </svg>
                  }
                >
                  <h3 className="vertical-timeline-element-title">Web Designer</h3>
                  <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                  <p>
                    User Experience, Visual Design
                  </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
      </Row>
   </Container>
   </Fragment>
   </div>
  )
}

export default Deals
'use client'
// import node module libraries
// import { Row, Col, Container } from 'react-bootstrap';

// // import widget as custom components
// import { PageHeading } from 'widgets'

// // import sub components
// import { DealFlow } from 'sub-components'

// import node module libraries
import { Row, Col} from 'react-bootstrap';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Deals = () => {
  return (
    <Row className="align-items-center justify-content-center g-0 min-vh-100">
      <Col xxl={4} lg={6} md={8} xs={12} className="py-8 py-xl-0">
    <VerticalTimeline layout={'1-column-left'}>
      <VerticalTimelineElement
        visible = {true}
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2011 - present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={"Icon"}
      >
        <h3 className="vertical-timeline-element-title">Creative Director</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project Management, Team Leading
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        visible = {true}
        className="vertical-timeline-element--work"
        date="2010 - 2011"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={"Icon"}
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
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={"icon"}
      >
        <h3 className="vertical-timeline-element-title">Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
        <p>
          User Experience, Visual Design
        </p>
      </VerticalTimelineElement>
    <VerticalTimelineElement
      iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
      icon={"Icon"}
    />
  </VerticalTimeline>
      </Col>
    </Row>
  )
}

export default Deals
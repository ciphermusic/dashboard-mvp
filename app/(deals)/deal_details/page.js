'use client'
// import node module libraries
// import { Row, Col, Container } from 'react-bootstrap';

// // import widget as custom components
// import { PageHeading } from 'widgets'

// // import sub components
// import { DealFlow } from 'sub-components'

// import node module libraries
import { Row, Col} from 'react-bootstrap';
import { DealFlow } from 'sub-components';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { ArrowRight } from 'react-bootstrap-icons';
import 'react-vertical-timeline-component/style.min.css';

const Deals = () => {
  return (
    <Row className="align-items-center justify-content-center g-0 min-vh-100">
      <Col xxl={4} lg={6} md={8} xs={12} className="py-8 py-xl-0">
      <VerticalTimeline>
        <VerticalTimelineElement>
          <a> Deals </a>
        </VerticalTimelineElement>
      {/* <VerticalTimelineElement
        className="vertical-timeline-element--work"
        // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2011 - present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<ArrowRight />}
      >
        <h3 className="vertical-timeline-element-title">Creative Director</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project Management, Team Leading
        </p>
      </VerticalTimelineElement> */}
    </VerticalTimeline>
      </Col>
    </Row>
  )
}

export default Deals
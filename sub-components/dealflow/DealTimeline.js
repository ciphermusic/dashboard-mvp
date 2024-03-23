import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { ArrowRight } from 'react-bootstrap-icons';

import 'react-vertical-timeline-component/style.min.css';

const DealFlow = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
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
      </VerticalTimelineElement>
    </VerticalTimeline>
  )
}

export default DealFlow;
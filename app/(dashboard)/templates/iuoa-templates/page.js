'use client'
// import node module libraries
import { Row, Col, Container } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

const IuoaTemplates = () => {
  return (
    <Container fluid className="p-6">
      <PageHeading heading="Intended Use of Assets" subheading="Configure what requesters must provide as part of their licensing request." />
      <p>Configure what requesters must provide as part of their licensing request.</p>

      <Row className="mt-6">
        <Col xl={{ span: 8, offset: 2 }} lg={{ span: 10, offset: 1 }} md={12} xs={12}>
          <Row>
          <ul class="list-group">
            <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" checked/>
                Request Received
            </li>
            <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox"/>
                Follow Up with Requester
            </li>
            <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" checked />
                Negotiation - Master Owner
            </li>
            <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" />
                Negotiation - Duration of License
            </li>
            <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" checked />
                Negotiation - Other Owners
            </li>
            <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." checked />
                Sign Off
            </li>
            <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." checked/>
                Payment
            </li>
          </ul>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default IuoaTemplates
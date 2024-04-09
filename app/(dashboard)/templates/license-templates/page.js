'use client'
// import node module libraries
import { Row, Col, Container, Table, Card } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

const LicenseTemplates = () => {
  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="License Templates" />
      <p>Upload and manage license template documents to be used by License Generator.</p>

      <Row className="mt-6">
        <Col xl={{ span: 8, offset: 2 }} lg={{ span: 10, offset: 1 }} md={12} xs={12}>
          <Row>
            <Card>
                <Card.Body>
                <Table responsive className="text-nowrap">
                <thead className="table-light">
                    <tr>
                        <th>File Name</th>
                        <th>Description</th>
                        <th>Approved</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="align-middle"><a href='/'>MSync-2.pdf</a></td>
                        <td className="align-middle">Micro Sync License Template</td>
                        <td className="align-middle">Yes</td>
                    </tr>
                    <tr>
                        <td className="align-middle"><a href='/'>Film_and_Television_sync.pdf</a></td>
                        <td className="align-middle">Film and Television License Template</td>
                        <td className="align-middle">Yes</td>
                    </tr>
                    <tr>
                        <td className="align-middle"><a href='/'>VideoStreaming_sync.pdf</a></td>
                        <td className="align-middle">Video Streaming License Template</td>
                        <td className="align-middle">Yes</td>
                    </tr>
                </tbody>
            </Table>
                </Card.Body>
            </Card>
            
          </Row>
          <br />
          <Row>
          <div class="input-group mb-3">
            <input type="file" class="form-control" id="inputGroupFile02" />
            <label class="input-group-text" for="inputGroupFile02">Upload</label>
         </div>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default LicenseTemplates
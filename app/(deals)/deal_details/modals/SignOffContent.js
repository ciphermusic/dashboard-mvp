import React, {useState} from 'react';

import Lottie from "lottie-react";
import LoadingAnimation from "../../../../public/images/animations/Loading_Animation.json";

import { Button, Card, Table, Container } from "react-bootstrap";

import { postGenerateLicense } from '../../../api/api_client';

import {Check, ExclamationTriangle, Person} from 'react-bootstrap-icons';

import CheckMark from "../../../../public/images/animations/Checkmark.json";

const SignOffContent = ({ generateLicense, setGenerateLicense, publishers, writers, setShowModal }) => {
  const [loading, setLoading] = useState(false);
  const [viewContract, setViewContract] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const handleClick = () => {
    setLoading(true); // Start the loading process

    setTimeout(() => {
      // After 2 seconds, do the following:
      postGenerateLicense(true); // Call postGenerateLicense
      setGenerateLicense(true);  // Update the generateLicense state
      setLoading(false); // Optionally, stop the loading process
    }, 2000);
  };

  const sendEmail = async () => {
    console.log("Sending email...");
    setShowAnimation(true);
    try {
        const response = await fetch('/api/signoff_email_proxy', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (!response.ok) {
          throw new Error(`Failed to send email, status: ${response.status}`);
        }
      } catch (error) {
        console.error('Error sending email:', error);
      }
    
      setTimeout(() => {
        setShowModal(false);
      }, 800); // 500 milliseconds = 0.5 seconds
  
      setTimeout(() => {
        setShowAnimation(false);
      }, 1000)
};

  const showContractClick = () => {
    setViewContract(true);
  };

  const closeContractClick = () => {
    setViewContract(false);
  }

  if (generateLicense) {
    if (viewContract) {
      return (
        <div>
          <div>
            <p>Details about the Sign Off...</p>
            <iframe
              src="/images/pdfs/License.pdf"
              width="100%"
              height="600px"
              style={{ border: 'none' }}
            ></iframe>
          </div>
          <div>
            <Button className="d-block w-100" onClick={closeContractClick}> Close License </Button>
          </div>
        </div>
      )
    } else {
      return (showAnimation ? (
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
        <div>
          <p>Details about the Sign Off...</p>
          <Card className="h-100 mb-3">
            <Card.Header className="bg-white py-4">
                  <h4 className="mb-0">Recording</h4>
              </Card.Header>
              <Table responsive className="text-nowrap">
                  <thead className="table-light">
                      <tr>
                          <th>Name</th>
                          <th>Affiliation</th>
                          <th>IPI</th>
                          <th>License</th>
                          <th>Status</th>
                          <th></th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr style={{border: "3px solid blue"}}>
                          <td className="align-middle">Believe Music   <Person color="blue"></Person></td>
                          <td className="align-middle">PRS</td>
                          <td className="align-middle">Placeholder</td>
                          <td className="align-middle">
                            <button 
                            type="button" 
                            className="btn btn-link p-0" // Using Bootstrap classes for styling
                            onClick={() => showContractClick()}>
                            {"View License"}
                            </button>
                          </td>
                          <td className="align-middle"><span className="badge bg-pill bg-success">completed</span></td>
                          {/* )} */}
                      </tr>
                  </tbody>
              </Table>
          </Card>
          <Card className="h-100 mb-3">
            <Card.Header className="bg-white py-4">
                <h4 className="mb-0">Writers / Composers</h4>
                </Card.Header>
                <Table responsive className="text-nowrap">
                    <thead className="table-light">
                        <tr>
                            <th>Name</th>
                            <th>Affiliation</th>
                            <th>IPI</th>
                            <th>License</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.values(writers).map((item, index) => {
                            return (
                            <tr key={index}>
                                <td className="align-middle">{item.name}    {index > 4 ? <ExclamationTriangle color="orange"></ExclamationTriangle> : <Check color="blue"></Check>}</td>
                                <td className="align-middle">{item.affiliation}</td>
                                <td className="align-middle">{item.IPI}</td>
                                <td className="align-middle">
                                  <button 
                                  type="button" 
                                  className="btn btn-link p-0" // Using Bootstrap classes for styling
                                  onClick={() => showContractClick()}>
                                  {"View License"}
                                  </button>
                                </td>
                                {item.license_status === 'pending' ? (
                                    <td className="align-middle">
                                        <a href="#" class="badge bg-warning">Pending</a>
                                    </td>
                                ) : (
                                    <td className="align-middle"><span className="badge bg-pill bg-success">{item.status}</span></td>
                                )}
                            </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Card>
          <Card className="h-100 mb-3">
            <Card.Header className="bg-white py-4">
                <h4 className="mb-0">Publishers</h4>
                </Card.Header>
                <Table responsive className="text-nowrap">
                    <thead className="table-light">
                        <tr>
                            <th>Name</th>
                            <th>Affiliation</th>
                            <th>IPI</th>
                            <th>License</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.values(publishers).map((item, index) => {
                            return (
                            <tr key={index}>
                                <td className="align-middle">{item.name}   <Check color="blue"></Check></td>
                                <td className="align-middle">{item.affiliation}</td>
                                <td className="align-middle">{item.IPI}</td>
                                <td className="align-middle">
                                  <button 
                                  type="button" 
                                  className="btn btn-link p-0"
                                  onClick={() => showContractClick()}>
                                  {"View License"}
                                  </button>
                                </td>
                                {item.license_status === 'pending' ? (
                                    <td className="align-middle">
                                        <a href="#" class="badge bg-warning">Pending</a>
                                    </td>
                                ) : (
                                    <td className="align-middle"><span className="badge bg-pill bg-success">{item.status}</span></td>
                                )}
                            </tr>
                            );
                        })}
                    </tbody>
                </Table>
                <Button variant="primary" type="submit" onClick={sendEmail}>Distribute Licenses</Button>
            </Card>
        </div>
      ))};
  } else {
    return (
      <div>
        {!loading ? (
          <div>
            <div>
              <p>Details about the Sign Off...</p>
              <h5>Please select a template</h5>
                <select className="form-select" style={{ width: '100%', marginBottom: '20px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}>
                  <option value="template1">License Template TV</option>
                  <option value="template2">License Template Film</option>
                  <option value="template3">License Template Microsync</option>
                </select>
              <iframe
                src="/images/pdfs/License.pdf"
                width="100%"
                height="600px"
                style={{ border: 'none' }}
              ></iframe>
            </div>
            <div>
              <Button className="d-block w-100" onClick={handleClick}> Generate Licenses </Button>
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column',
              justifyContent: 'center', 
              alignItems: 'center', 
            }}>
              <Lottie animationData={LoadingAnimation} style={{ width: '30%', height: '30%' }} loop={true} />
              <p style={{ fontWeight: 'bold' }}> Please wait while we generate your licenses...</p>
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default SignOffContent;

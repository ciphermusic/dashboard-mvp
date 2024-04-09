import React, {useState} from 'react';

import Lottie from "lottie-react";
import LoadingAnimation from "../../../../public/images/animations/Loading_Animation.json";

import { Button, Card, Table, Container } from "react-bootstrap";

import { postGenerateInvoice } from '../../../api/api_client';

import {Check, ExclamationTriangle, Person} from 'react-bootstrap-icons';

import CheckMark from "../../../../public/images/animations/Checkmark.json";

const PaymentContent = ({ generateInvoice, setGenerateInvoice, publishers, writers, setShowModal }) => {
  const [loading, setLoading] = useState(false);
  const [viewContract, setViewContract] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const sendEmail = async () => {
    console.log("Sending email...");
    setShowAnimation(true);
    try {
        const response = await fetch('/api/payment_email_proxy', {
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
  const handleClick = () => {
    setLoading(true); // Start the loading process

    setTimeout(() => {
      // After 2 seconds, do the following:
      postGenerateInvoice(true); // Call postGenerateLicense
      setGenerateInvoice(true);  // Update the generateLicense state
      setLoading(false); // Optionally, stop the loading process
    }, 2000);
  };

  const showContractClick = () => {
    setViewContract(true);
  };

  const closeContractClick = () => {
    setViewContract(false);
  }

  if (generateInvoice) {
    if (viewContract) {
      <div>
        <div>
          <p>Details about the Payment...</p>
          <iframe
            src="/images/pdfs/invoice_pdf.pdf"
            width="100%"
            height="600px"
            style={{ border: 'none' }}
          ></iframe>
        </div>
        <div>
          <Button className="d-block w-100" onClick={closeContractClick}> Close Invoice </Button>
        </div>
      </div>
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
          <p>Details about the Payment...</p>
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
                          <th>Invoice</th>
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
                            {"View Invoice"}
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
                            <th>Invoice</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.values(writers).map((item, index) => {
                            return (
                            <tr key={index}>
                                <td className="align-middle">{item.name}    {index > 5 ? <ExclamationTriangle color="orange"></ExclamationTriangle> : <Check color="blue"></Check>}</td>
                                <td className="align-middle">{item.affiliation}</td>
                                <td className="align-middle">{item.IPI}</td>
                                <td className="align-middle">
                                  <button 
                                  type="button" 
                                  className="btn btn-link p-0" // Using Bootstrap classes for styling
                                  onClick={() => showContractClick()}>
                                  {"View Invoice"}
                                  </button>
                                </td>
                                {item.invoice_status === 'pending' ? (
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
                            <th>Invoice</th>
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
                                  {"View Invoice"}
                                  </button>
                                </td>
                                {item.invoice_status === 'pending' ? (
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
                <Button variant="primary" type="submit" onClick={sendEmail}>Distribute Invoices</Button>
            </Card>
        </div>
    ))};
  } else {
    return (
      <div>
        {!loading ? (
          <div>
            <div>
              <p>Details about the Payment...</p>
              <h5>Please select a template</h5>
                <select className="form-select" style={{ width: '100%', marginBottom: '20px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}>
                  <option value="template1">Invoice Template TV</option>
                  <option value="template2">Invoice Template Film</option>
                  <option value="template3">Invoice Template Microsync</option>
                </select>
              <iframe
                src="/images/pdfs/invoice_pdf.pdf"
                width="100%"
                height="600px"
                style={{ border: 'none' }}
              ></iframe>
            </div>
            <div>
              <Button className="d-block w-100" onClick={handleClick}> Generate Invoices </Button>
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
              <p style={{ fontWeight: 'bold' }}> Please wait while we generate your invoices...</p>
            </div>
          </div>
        )}
      </div>
    );
  }
};


export default PaymentContent;

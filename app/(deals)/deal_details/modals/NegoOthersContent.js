import React, {useState} from 'react';
import {Button, Card, Table, Form, Container} from 'react-bootstrap';

import { postPublishers, postWriters, getCurrentPrice } from '../../../api/api_client';

import {Check, ExclamationTriangle} from 'react-bootstrap-icons';

import Lottie from "lottie-react";
import CheckMark from "../../../../public/images/animations/Checkmark.json";

const NegoOthersContent = ({writers, setWriters, publishers, setPublishers}) => {
    const [addStakeholder, setAddStakeholder] = useState(false);
    const [approvedAnimation, setApprovedAnimation] = useState(false);

    const handleClick = () => {
        setAddStakeholder(true);
    }

    const sendEmail = async () => {
        console.log("Sending email...");
        const price = await getCurrentPrice();
        let maxValue = null;
        for (const [key, value] of Object.entries(price)) {
            if (maxValue === null || value > maxValue) {
            maxValue = value;
            }
        }
        try {
            const response = await fetch('/api/email_proxy?price=' + maxValue, {
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
    };

    const [formData, setFormData] = useState({
        type: '',
        name: '',
        affiliation: '',
        IPI: '',
        contact: '',
        status: 'pending',
        license_status: 'pending',
        invoice_status: 'pending'
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.type === 'writer') {
            const { type, ...writerInfo } = formData;

            writers[Object.keys(writers).length + 1] = writerInfo;
            const error = await postWriters(writers);
            if (error) {
                console.log("Couldn't update wrtiers");
            }
            setWriters(writers)
        } else {
            const { type, ...publisherInfo } = formData;
            
            console.log(publishers.length)

            publishers[Object.keys(publishers).length + 1] = publisherInfo;
            console.log(publishers)
            const error = await postPublishers(publishers);
            if (error) {
                console.log("Couldn't update publishers");
            }
            setPublishers(publishers)
        }

        setApprovedAnimation(true);

        setTimeout(() => {
            setApprovedAnimation(false);
            setAddStakeholder(false);
        }, 800);
      };

    if (!addStakeholder) {
        return (
            <div>
                <p>Details about the Negotiation - Other Stakeholders...</p>
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
                                <th>Contact</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.values(writers).map((item, index) => {
                                return (
                                <tr key={index}>
                                    <td className="align-middle">{item.name}   {index > 1 ? <ExclamationTriangle color="orange"></ExclamationTriangle> : <Check color="blue"></Check>}</td>
                                    <td className="align-middle">{item.affiliation}</td>
                                    <td className="align-middle">{item.IPI}</td>
                                    <td className="align-middle">{item.contact}</td>
                                    {item.status === 'pending' ? (
                                        <td className="align-middle">
                                           <span className="badge bg-pill bg-warning">{item.status}</span>
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
                                <th>Contact</th>
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
                                    <td className="align-middle">{item.contact}</td>
                                    {item.status === 'pending' ? (
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
                    <Button variant="primary" type="submit" onClick={handleClick}>Add Stakeholder</Button>
                </Card>
            </div>
        )
    } else {
        return ( approvedAnimation ? (
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
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Stakeholder Type</Form.Label>
                    <Form.Select aria-label="Status select" name="type" value={formData.type} onChange={handleChange}>
                        <option>Open this select menu</option>
                        <option value="writer">Writer / Composer</option>
                        <option value="publisher">Publisher</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="name" value={formData.name} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formAffiliation">
                    <Form.Label>Affiliation</Form.Label>
                    <Form.Control type="text" placeholder="Enter affiliation" name="affiliation" value={formData.affiliation} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formIPI">
                    <Form.Label>IPI</Form.Label>
                    <Form.Control type="text" placeholder="Enter IPI" name="IPI" value={formData.IPI} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formContact">
                    <Form.Label>Contact</Form.Label>
                    <Form.Control type="text" placeholder="Enter contact" name="contact" value={formData.contact} onChange={handleChange} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={sendEmail}>
                    Add & Notify Stakeholder
                </Button>
            </Form>
        ))
    }
};

export default NegoOthersContent;

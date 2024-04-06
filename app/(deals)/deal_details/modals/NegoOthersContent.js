import React from 'react';
import {Button, Card, Table} from 'react-bootstrap';

const NegoOthersContent = () => (
  <div>
    <p>Details about the Negotiation - Other Stakeholders...</p>
    <Card className="h-100">
      <Card.Header className="bg-white py-4">
            <h4 className="mb-0">Team </h4>
        </Card.Header>
        <Table responsive className="text-nowrap">
            <thead className="table-light">
                <tr>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {/* {TeamsData.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td className="align-middle">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <Image src={item.image} alt="" className="avatar-md avatar rounded-circle" />
                                    </div>
                                    <div className="ms-3 lh-1">
                                        <h5 className=" mb-1">{item.name}</h5>
                                        <p className="mb-0">{item.email}</p>
                                    </div>
                                </div>
                            </td>
                            <td className="align-middle">{item.role}</td>
                            <td className="align-middle">{item.lastActivity}</td>
                            <td className="align-middle">
                                <ActionMenu />
                            </td>
                        </tr>
                    )
                })} */}
            </tbody>
        </Table>
        <Button variant="primary" type="submit">Add Stakeholder</Button>
    </Card>
  </div>
);

export default NegoOthersContent;

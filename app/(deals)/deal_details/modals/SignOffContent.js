import React, {useState} from 'react';

import Lottie from "lottie-react";
import LoadingAnimation from "../../../../public/images/animations/Loading_Animation.json";

import { Button, Card, Table } from "react-bootstrap";

import { postGenerateLicense } from '../../../api/api_client';

const SignOffContent = ({ generateLicense, setGenerateLicense, publishers }) => {
  const [loading, setLoading] = useState(false);
  const [viewContract, setViewContract] = useState(false);

  const handleClick = () => {
    setLoading(true); // Start the loading process

    setTimeout(() => {
      // After 5 seconds, do the following:
      postGenerateLicense(true); // Call postGenerateLicense
      setGenerateLicense(true);  // Update the generateLicense state
      setLoading(false); // Optionally, stop the loading process
    }, 2000);
  };

  const showContractClick = () => {
    setViewContract(true);
  };

  const closeContractClick = () => {
    setViewContract(false);
  }

  if (generateLicense) {
    return (viewContract ? (
      <div>
        <p>Details about the Sign Off...</p>
        <iframe
          src="/images/pdfs/License.pdf"
          width="100%"
          height="600px"
          style={{ border: 'none' }}
        ></iframe>
         <Button onClick={closeContractClick}> Close Contract </Button>
      </div>
    ) : (
      <div>
        <p>Details about the Sign Off...</p>
        {/* <iframe
          src="/images/pdfs/License.pdf"
          width="100%"
          height="600px"
          style={{ border: 'none' }}
        ></iframe> */}
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
                              <td className="align-middle">{item.name}</td>
                              <td className="align-middle">{item.affiliation}</td>
                              <td className="align-middle">{item.IPI}</td>
                              <td className="align-middle">
                                <button 
                                type="button" 
                                className="btn btn-link p-0" // Using Bootstrap classes for styling
                                onClick={() => showContractClick()}>
                                {"View Contract"}
                                </button>
                              </td>
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
          </Card>
      </div>
    ));
  } else {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        {!loading ? (
          <Button onClick={handleClick} style={{ marginTop: '20px', marginBottom: '20px' }}>
            Click to Generate Licenses
          </Button>
        ) : (
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center', 
            alignItems: 'center', 
          }}>
            <Lottie animationData={LoadingAnimation} style={{ width: '30%', height: '30%' }} loop={true} />
            <p style={{ fontWeight: 'bold' }}> Please wait while we generate your licenses...</p>
          </div>
        )}
      </div>
    );
  }
};


export default SignOffContent;

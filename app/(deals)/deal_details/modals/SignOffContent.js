import React, {useState} from 'react';

import Lottie from "lottie-react";
import LoadingAnimation from "../../../../public/images/animations/Loading_Animation.json";

import { Button } from "react-bootstrap";

import { postGenerateLicense } from '../../../api/api_client';

const SignOffContent = ({ generateLicense, setGenerateLicense }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true); // Start the loading process

    setTimeout(() => {
      // After 5 seconds, do the following:
      postGenerateLicense(true); // Call postGenerateLicense
      setGenerateLicense(true);  // Update the generateLicense state
      setLoading(false); // Optionally, stop the loading process
    }, 2000);
};

  if (generateLicense) {
    return (
      <div>
        <p>Details about the Sign Off...</p>
        <iframe
          src="http://localhost:3000/images/pdfs/License.pdf"
          width="100%"
          height="600px"
          style={{ border: 'none' }}
        ></iframe>
      </div>
    );
  } else {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        {!loading ? (
          <Button onClick={handleClick} style={{ marginTop: '20px', marginBottom: '20px' }}>
            Click to Generate License
          </Button>
        ) : (
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center', 
            alignItems: 'center', 
          }}>
            <Lottie animationData={LoadingAnimation} style={{ width: '30%', height: '30%' }} loop={true} />
            <p style={{ fontWeight: 'bold' }}> Please wait while we generate your license</p>
          </div>
        )}
      </div>
    );
  }
};


export default SignOffContent;

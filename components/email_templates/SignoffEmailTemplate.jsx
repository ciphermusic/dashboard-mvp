import * as React from 'react';

const ACTION_URL = process.env.API_ENDPOINT + 'handle_sign_email_action';

export const SignoffEmailTemplate = ({ firstName }) => (
  <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
    <h1 style={{ color: '#333' }}>Hello, {firstName}!</h1>
    <p> Please find attached the Sync License Contract for the track <i>Everybody</i> by Don Bronco.</p>
    <div style={{ marginTop: '20px' }}>
      <a
        href={`${ACTION_URL}?response=yes`}
        style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '10px 20px',
          textDecoration: 'none',
          borderRadius: '5px',
          marginRight: '10px',
        }}
      >
        Click here Sign the Contract
      </a>
    </div>
  </div>
);

export default SignoffEmailTemplate;
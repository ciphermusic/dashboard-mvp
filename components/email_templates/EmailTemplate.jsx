import * as React from 'react';

const ACTION_URL = process.env.API_ENDPOINT + 'handle_email_action';

export const EmailTemplate = ({ firstName, price }) => (
  <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
    <h1 style={{ color: '#333' }}>Hello, {firstName}!</h1>
    <p>Incoming Sync Request, your take will be: <strong>$750</strong>.</p>
    <p>Would you like to accept the request?</p>
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
        Yes
      </a>
      <a
        href={`${ACTION_URL}?response=no`}
        style={{
          backgroundColor: '#f44336',
          color: 'white',
          padding: '10px 20px',
          textDecoration: 'none',
          borderRadius: '5px',
        }}
      >
        No
      </a>
    </div>
  </div>
);

export default EmailTemplate;
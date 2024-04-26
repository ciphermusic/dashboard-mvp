import * as React from 'react';

const ACTION_URL = process.env.API_ENDPOINT + 'handle_payment_email_action';

export const PaymentEmailTemplate = ({ firstName }) => (
  <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
    <h1 style={{ color: '#333' }}>Hello, {firstName}!</h1>
    <p> Please find attached the Invoice for the track <i>Calm Down</i> by Rema. The payment will be processed shortly!</p>
    <p> If you require assistance, please contact us at <a href="mailto:sales@ciphermusic.io">support@ciphermusic.io</a>, or simply reply to this email.</p>
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
        Click to visit the Deal page
      </a>
    </div>
  </div>
);

export default PaymentEmailTemplate;
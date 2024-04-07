'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const ResponsePage = () => {
  const router = useRouter();
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Check if router.query is defined
    if (router.query) {
      const { response } = router.query;

      if (response === 'yes') {
        setMessage('You have accepted the request.');
        console.log('Handling Yes action...');
      } else if (response === 'no') {
        setMessage('You have declined the request.');
        console.log('Handling No action...');
      }
    }
  }, [router.query]);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', marginTop: '50px' }}>
      <h1>Thank you for your response!</h1>
      <p>{message}</p>
      <button onClick={() => router.push('/')}>Go to Dashboard</button>
    </div>
  );
};

export default ResponsePage;
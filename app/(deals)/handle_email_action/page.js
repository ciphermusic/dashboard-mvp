'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { getWriters, postWriters } from '../../api/api_client';
import { Card, Table } from 'react-bootstrap';

const ResponsePage = () => {
  const router = useRouter();
  const [writers, setWriters] = useState([]);

  useEffect(() => {
    const fetchAndUpdateWriters = async () => {
      try {
        const fetchedWritersObject = await getWriters();
        setWriters(fetchedWritersObject);
        const fetchedWritersArray = Object.values(fetchedWritersObject);
    
        let shouldPostWriters = false;
        const updatedWriters = fetchedWritersArray.map((writer) => {
          if (writer.status === 'pending') {
            shouldPostWriters = true;
            return { ...writer, status: 'completed' };
          }
          return writer;
        });
    
        if (shouldPostWriters) {
          await postWriters(updatedWriters);
          setWriters(updatedWriters);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    if (writers.length == 0) {
      fetchAndUpdateWriters();
    }
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', marginTop: '100px' }}>
      <h3>Confirmed! You have <strong>Accepted</strong> the sync licensing request.</h3>
      <h5>We will send you an email as soon as the license contract is ready! </h5>
      <br />
      <button onClick={() => router.push('/deal_details')}>View request and deal details.</button>
    </div>
  );
};

export default ResponsePage;
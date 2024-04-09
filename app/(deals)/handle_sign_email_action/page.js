'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { getWriters, postDealState, postWriters } from '../../api/api_client';

const SignOffResponsePage = () => {
  const router = useRouter();
  const [writers, setWriters] = useState([]);

  useEffect(() => {
    const fetchAndUpdateWriters = async () => {
      try {
        const fetchedWritersObject = await getWriters();
        setWriters(fetchedWritersObject);
        const fetchedWritersArray = Object.values(fetchedWritersObject);
    
        let shouldPostWriters = false;
        let updatedWriters = fetchedWritersArray.map((writer) => {
          if (writer.license_status === 'pending') {
            shouldPostWriters = true;
            return { ...writer, license_status: 'completed' };
          }
          return writer;
        });

        // remove all null writers
        updatedWriters = updatedWriters.filter(writer => writer !== null);
    
        if (shouldPostWriters) {
          await postWriters(updatedWriters);
          setWriters(updatedWriters);
          postDealState(10);
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
      <h3>Confirmed! You have <strong>Signed</strong> the sync licensing request.</h3>
      <h5>We will send an email as soon as the payment is received and processed! </h5>
      <br />
      <button onClick={() => router.push('/deal_details')}>View request and deal details.</button>
    </div>
  );
};

export default SignOffResponsePage;
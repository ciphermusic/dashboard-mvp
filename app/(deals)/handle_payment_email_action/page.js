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
          if (writer.invoice_status === 'pending') {
            shouldPostWriters = true;
            return { ...writer, invoice_status: 'completed' };
          }
          return writer;
        });

        // remove all null writers
        updatedWriters = updatedWriters.filter(writer => writer !== null);
    
        if (shouldPostWriters) {
          await postWriters(updatedWriters);
          setWriters(updatedWriters);
          postDealState(12);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    if (writers.length == 0) {
      fetchAndUpdateWriters();
    }

    setTimeout(() => {
      router.push('/deal_details');
    }, 1000);
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', marginTop: '100px' }}>
      <h3>Redirecting to Deal Page</h3>
      <br />
    </div>
  );
};

export default SignOffResponsePage;
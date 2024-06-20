import React, {useState, useEffect} from 'react';
import { Container } from 'react-bootstrap';
import { getUserId, postDealPrice, postDealState } from '../../../api/api_client' ;

import Lottie from "lottie-react";
import CheckMark from "../../../../public/images/animations/Checkmark.json";

const NegoMasterContent = ({dealState, setDealState, setShowModal, currentPrice, setCurrentPrice}) => {
  const [price, setPrice] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showError, setShowError] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!price) {
      setShowError(true);
    } else {
      setShowError(false);
      setFormSubmitted(true);

      const user = await getUserId();
      const dealPriceError = await postDealPrice({userId: user.id, price: price});
      const dealStateError = await postDealState(8);

      if (dealPriceError || dealStateError) {
        console.log("Couldn't update deal price");
      }

      setTimeout(() => {
        if (price > currentPrice) {
          setCurrentPrice(price);
        }
        setDealState(8);
        setShowModal(false);
      }, 500);
    }
  }

  return (
    formSubmitted ? (
      <Container className="mt-5">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
        }}>
          <Lottie animationData={CheckMark} style={{ width: '25%', height: '25%' }} loop="false" />
        </div>
      </Container>
    ) : (
      <div>
        <p>Details about the Negotiation - Master Owner...</p>
        <Container className="mt-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="priceInput">Price</label>
              <input
                type="number"
                className="form-control"
                id="priceInput"
                placeholder="Enter Per Side Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)} // Update state on input change
              />
              {showError && <div className="text-danger">Please enter a price.</div>} {/* Error message */}
            </div>
            <button type="submit" className="btn btn-primary mt-3">Confirm Price</button>
          </form>
        </Container>
    </div> 
    )
  );
};

export default NegoMasterContent;

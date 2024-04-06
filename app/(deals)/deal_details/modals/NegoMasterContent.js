import React from 'react';
import { Container } from 'react-bootstrap';

const NegoMasterContent = () => (
  <div>
    <p>Details about the Negotiation - Master Owner...</p>
    <Container className="mt-5">
      <form>
        <div className="form-group">
          <label htmlFor="priceInput">Price</label>
          <input className="form-control" id="priceInput" placeholder="Enter price" />
        </div>
      </form>
    </Container>
  </div>
);

export default NegoMasterContent;

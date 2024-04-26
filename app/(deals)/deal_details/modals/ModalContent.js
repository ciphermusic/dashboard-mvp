import React from 'react';
import DealTimelineElementType from 'data/types/DealTimelineElementType';
import RequestContent from './RequestContent';
import NegoMasterContent from './NegoMasterContent';
import NegoOthersContent from './NegoOthersContent';
import SignOffContent from './SignOffContent';
import PaymentContent from './PaymentContent';

const ModalContent = ({ type, dealState, setDealState, setShowModal, currentPrice, setCurrentPrice, generateLicense, setGenerateLicense, publishers, setPublishers, writers, setWriters, generateInvoice, setGenerateInvoice }) => {
  switch (type) {
    case DealTimelineElementType.REQUEST:
      return <RequestContent dealState={dealState} setDealState={setDealState} setShowModal={setShowModal} currentPrice={currentPrice} setCurrentPrice={setCurrentPrice}/>;
    case DealTimelineElementType.NEGOTIATION_MASTER:
      return <NegoMasterContent dealState={dealState} setDealState={setDealState} setShowModal={setShowModal} currentPrice={currentPrice} setCurrentPrice={setCurrentPrice}/>;
    case DealTimelineElementType.NEGOTIATION_OTHER:
      return <NegoOthersContent writers={writers} setWriters={setWriters} publishers={publishers} setPublishers={setPublishers}/>;
    case DealTimelineElementType.SIGN_OFF:
      return <SignOffContent generateLicense={generateLicense} setGenerateLicense={setGenerateLicense} publishers={publishers} writers={writers} setShowModal={setShowModal}/>;
    case DealTimelineElementType.PAYMENT:
      return <PaymentContent generateInvoice={generateInvoice} setGenerateInvoice={setGenerateInvoice} publishers={publishers} writers={writers} setShowModal={setShowModal}/>;
    default:
      return <RequestContent />;
  }
};

export default ModalContent;

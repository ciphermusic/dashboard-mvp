import React from 'react';
import DealTimelineElementType from 'data/types/DealTimelineElementType';
import RequestContent from './RequestContent';
import NegoMasterContent from './NegoMasterContent';
import NegoOthersContent from './NegoOthersContent';
import SignOffContent from './SignOffContent';
import PaymentContent from './PaymentContent';

const ModalContent = ({ type, dealState, setDealState, setShowModal, setCurrentPrice, generateLicense, setGenerateLicense }) => {
  switch (type) {
    case DealTimelineElementType.REQUEST:
      return <RequestContent dealState={dealState} setDealState={setDealState} setShowModal={setShowModal}/>;
    case DealTimelineElementType.NEGOTIATION_MASTER:
      return <NegoMasterContent dealState={dealState} setDealState={setDealState} setShowModal={setShowModal} setCurrentPrice={setCurrentPrice}/>;
    case DealTimelineElementType.NEGOTIATION_OTHER:
      return <NegoOthersContent />;
    case DealTimelineElementType.SIGN_OFF:
      return <SignOffContent generateLicense={generateLicense} setGenerateLicense={setGenerateLicense}/>;
    case DealTimelineElementType.PAYMENT:
      return <PaymentContent />;
    default:
      return <RequestContent />;
  }
};

export default ModalContent;

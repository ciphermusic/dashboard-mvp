'use client';

// import node module libraries
import { Row, Col, Card, Form, Button, ProgressBar, Container } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, CheckAll } from 'react-bootstrap-icons';
import Lottie from "lottie-react";
import CheckMark from "../../../public/images/animations/Checkmark.json";

const RequestForm = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState(''); // State to hold error message
  const [step, setStep] = useState(1); // State to hold the current step of the form
  const [showAnimation, setShowAnimation] = useState(false); // State to show animation after form submission

  const [formData, setFormData] = useState({
    songTitle: '',
    artistName: '',
    yourName: '',
    companyName: '',
    companyAddress: '',
    phoneNumber: '',
    emailAddress: '',
    username: '',
    productionName: '',
    selectedProjectType: '',
    selectedMediaRight: '',
    distributionCompany: '',
    termDuration: '',
    recordingTitle: '',
    territory: '',
    synopsis: '',
    descriptionOfUse: '',
    natureOfUse: '',
    productionBudget: '',
    musicBudget: '',
    additionalInformation: ''
  });

  const [allFieldsFilledOne, setAllFieldsFilledOne] = useState(false);
  const [allFieldsFilledTwo, setAllFieldsFilledTwo] = useState(false);
  const [allFieldsFilledThree, setAllFieldsFilledThree] = useState(false);
  const [allFieldsFilledFour, setAllFieldsFilledFour] = useState(false);
  const [allFieldsFilledFive, setAllFieldsFilledFive] = useState(false);
  const [allFieldsFilledSix, setAllFieldsFilledSix] = useState(false);
  const [allFieldsFilledSeven, setAllFieldsFilledSeven] = useState(false);

  useEffect(() => {
    const { 
      songTitle, 
      artistName, 
      yourName, 
      companyName, 
      companyAddress, 
      phoneNumber, 
      emailAddress, 
      username, 
      productionName, 
      selectedProjectType, 
      selectedMediaRight, 
      distributionCompany, 
      termDuration, 
      recordingTitle, 
      territory, 
      synopsis,
      descriptionOfUse,
      natureOfUse,
      productionBudget,
      musicBudget,
      additionalInformation
    } = formData;

    if (songTitle && artistName) {
      setAllFieldsFilledOne(true);
    } else {
      setAllFieldsFilledOne(false);
    }

    if (yourName && companyName && companyAddress && phoneNumber && emailAddress && username && productionName) {
      setAllFieldsFilledTwo(true);
    } else {
      setAllFieldsFilledTwo(false);
    }

    if (selectedProjectType && selectedMediaRight) {
      setAllFieldsFilledThree(true);
    } else {
      setAllFieldsFilledThree(false);
    }

    if (distributionCompany && termDuration && recordingTitle && territory) {
      setAllFieldsFilledFour(true);
    } else {
      setAllFieldsFilledFour(false);
    }

    if (synopsis) {
      setAllFieldsFilledFive(true);
    } else {
      setAllFieldsFilledFive(false);
    }

    if (descriptionOfUse && natureOfUse) {
      setAllFieldsFilledSix(true);
    } else {
      setAllFieldsFilledSix(false);
    }

    if (productionBudget && musicBudget) {
      setAllFieldsFilledSeven(true);
    } else {
      setAllFieldsFilledSeven(false);
    }

  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'selectedProjectType') {
        setFormData({
          ...formData,
          selectedProjectType: value
        });
      } else if (name === 'selectedMediaRight') {
        setFormData({
          ...formData,
          selectedMediaRight: value
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    setShowAnimation(true);

    setTimeout(() => {
      router.push('/');
    }, 800);
  }

  return (
    <Row className="align-items-center justify-content-center g-0 min-vh-100">
      <Col xxl={6} lg={8} md={10} xs={12} className="py-8 py-xl-0">
        {/* Card */}
        <Card className="smooth-shadow-md">
          {/* Card body */}
          <Card.Body className="p-6">
            <div className="mb-4">
              <Link href="/"><div style={{ fontSize: '36px', fontWeight: 'bold' }}>Cipher</div></Link>
              <p className="mb-6">Please enter your request information.</p>
            </div>
            
            {/* Form */}
            <Form>
              {step === 1 && (
                <>
                  <Form.Group className="mb-3" controlId="songTitle">
                    <Form.Label>Song Title</Form.Label>
                    <Form.Control
                      type="text"
                      name="songTitle"
                      placeholder="Enter name of song"
                      required
                      value={formData.songTitle}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="artistName">
                    <Form.Label>Artist Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="artistName"
                      placeholder="Enter name of recording artist"
                      required
                      value={formData.artistName}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  {/* Arrows */}
                  <div className="d-flex justify-content-end pt-3">
                    {allFieldsFilledOne ? (
                      <ArrowRight onClick={handleNext} style={{ fontSize: '24px', cursor: 'pointer', color: 'blue' }} />
                    ) : (
                      <ArrowRight style={{ fontSize: '24px', cursor: 'pointer', color: 'black' }} />
                    )}
                  </div>
                  {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                </>
              )}
              {step === 2 && (
                <>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="yourName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="yourName"
                          placeholder="Enter your name"
                          required
                          value={formData.yourName}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="phoneNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phoneNumber"
                          placeholder="Enter phone number"
                          required
                          value={formData.phoneNumber}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="companyName">
                        <Form.Label>Your Company Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="companyName"
                          placeholder="Enter your company name"
                          required
                          value={formData.companyName}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="emailAddress">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                          type="email"
                          name="emailAddress"
                          placeholder="Enter email address"
                          required
                          value={formData.emailAddress}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="companyAddress">
                        <Form.Label>Company Address</Form.Label>
                        <Form.Control
                          type="text"
                          name="companyAddress"
                          placeholder="Enter company address"
                          required
                          value={formData.companyAddress}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="username">
                        <Form.Label>Username or email</Form.Label>
                        <Form.Control
                          type="email"
                          name="username"
                          placeholder="Enter address here"
                          required
                          style={{ borderColor: errorMessage ? 'red' : '' }}
                          value={formData.username}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>

                    <Col md={12}>
                      <Form.Group className="mb-3" controlId="productionName">
                        <Form.Label>Name of Production</Form.Label>
                        <Form.Control
                          type="text"
                          name="productionName"
                          placeholder="Enter name of production"
                          required
                          value={formData.productionName}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <div className="d-flex justify-content-between pt-3">
                    <ArrowLeft onClick={handlePrevious} style={{ fontSize: '24px', cursor: 'pointer', color: 'blue' }} />
                    {allFieldsFilledTwo ? (
                      <ArrowRight onClick={handleNext} style={{ fontSize: '24px', cursor: 'pointer', color: 'blue' }} />
                    ) : (
                      <ArrowRight style={{ fontSize: '24px', cursor: 'pointer', color: 'black' }} />
                    )}
                  </div>
                  {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                </>
              )}
              {step === 3 && (
                <>
                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="projectType">
                        <Form.Label>Project Type</Form.Label>
                        <div className="mb-3">
                          <Form.Check
                            type="radio"
                            label="Major Motion Picture"
                            name="selectedProjectType"
                            value="majorMotionPicture"
                            checked={formData.selectedProjectType === 'majorMotionPicture'}
                            onChange={handleChange}
                          />
                          <Form.Check
                            type="radio"
                            label="Television"
                            name="selectedProjectType"
                            value="television"
                            checked={formData.selectedProjectType === 'television'}
                            onChange={handleChange}
                          />
                          <Form.Check
                            type="radio"
                            label="Advertising"
                            name="selectedProjectType"
                            value="advertising"
                            checked={formData.selectedProjectType === 'advertising'}
                            onChange={handleChange}
                          />
                          <Form.Check
                            type="radio"
                            label="Internet"
                            name="selectedProjectType"
                            value="internet"
                            checked={formData.selectedProjectType === 'internet'}
                            onChange={handleChange}
                          />
                          <Form.Check
                            type="radio"
                            label="Indie Film / Documentary"
                            name="selectedProjectType"
                            value="indieFilmDocumentary"
                            checked={formData.selectedProjectType === 'indieFilmDocumentary'}
                            onChange={handleChange}
                          />
                          <Form.Check
                            type="radio"
                            label="Live Stage"
                            name="selectedProjectType"
                            value="liveStage"
                            checked={formData.selectedProjectType === 'liveStage'}
                            onChange={handleChange}
                          />
                          <Form.Check
                            type="radio"
                            label="Video Game"
                            name="selectedProjectType"
                            value="videoGame"
                            checked={formData.selectedProjectType === 'videoGame'}
                            onChange={handleChange}
                          />
                          <Form.Check
                            type="radio"
                            label="Podcast"
                            name="selectedProjectType"
                            value="podcast"
                            checked={formData.selectedProjectType === 'podcast'}
                            onChange={handleChange}
                          />
                          <Form.Check
                            type="radio"
                            label="Consumer Product"
                            name="selectedProjectType"
                            value="consumerProduct"
                            checked={formData.selectedProjectType === 'consumerProduct'}
                            onChange={handleChange}
                          />
                          <Form.Check
                            type="radio"
                            label="Sample"
                            name="selectedProjectType"
                            value="sample"
                            checked={formData.selectedProjectType === 'sample'}
                            onChange={handleChange}
                          />
                          <Form.Check
                            type="radio"
                            label="Remix"
                            name="selectedProjectType"
                            value="remix"
                            checked={formData.selectedProjectType === 'remix'}
                            onChange={handleChange}
                          />
                          <Form.Check
                            type="radio"
                            label="Compilation Album"
                            name="selectedProjectType"
                            value="compilationAlbum"
                            checked={formData.selectedProjectType === 'compilationAlbum'}
                            onChange={handleChange}
                          />
                          <Form.Check
                            type="radio"
                            label="Other"
                            name="selectedProjectType"
                            value="otherProjectType"
                            checked={formData.selectedProjectType === 'otherProjectType'}
                            onChange={handleChange}
                          />
                        </div>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="mediaRights">
                        <Form.Label>Media Rights Requested</Form.Label>
                        <div className="mb-3">
                          <Form.Check
                            type="radio"
                            label="Television"
                            name="selectedMediaRight"
                            value="televisionMedia"
                            checked={formData.selectedMediaRight === 'televisionMedia'}
                            onChange={handleChange}
                          />
                          <Form.Check
                            type="radio"
                            label="Internet"
                            name="selectedMediaRight"
                            value="internetMedia"
                            checked={formData.selectedMediaRight === 'internetMedia'}
                            onChange={handleChange}
                          />
                          <Form.Check
                            type="radio"
                            label="Theatrical"
                            name="selectedMediaRight"
                            value="theatricalMedia"
                            checked={formData.selectedMediaRight === 'theatricalMedia'}
                            onChange={handleChange}
                          />
                          <Form.Check
                            type="radio"
                            label="Radio"
                            name="selectedMediaRight"
                            value="radioMedia"
                            checked={formData.selectedMediaRight === 'radioMedia'}
                            onChange={handleChange}
                          />
                          <Form.Check
                            type="radio"
                            label="Other"
                            name="selectedMediaRight"
                            value="otherMedia"
                            checked={formData.selectedMediaRight === 'otherMedia'}
                            onChange={handleChange}
                          />
                        </div>
                      </Form.Group>
                    </Col>
                  </Row>
                  <div className="d-flex justify-content-between pt-3">
                    <ArrowLeft onClick={handlePrevious} style={{ fontSize: '24px', cursor: 'pointer', color: 'blue' }} />
                    {allFieldsFilledThree ? (
                      <ArrowRight onClick={handleNext} style={{ fontSize: '24px', cursor: 'pointer', color: 'blue' }} />
                    ) : (
                      <ArrowRight style={{ fontSize: '24px', cursor: 'pointer', color: 'black' }} />
                    )}
                  </div>
                  {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                </>
              )}
              {step === 4 && (
                <>
                  <Row>
                    <Form.Group className="mb-3" controlId="distributionCompany">
                      <Form.Label>Distribution/Production Company</Form.Label>
                      <Form.Control
                        type="text"
                        name="distributionCompany"
                        placeholder="Enter your name"
                        required
                        value={formData.distributionCompany}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="licenseDuration">
                      <Form.Label>Term/Duration of License Requested</Form.Label>
                      <Form.Control
                        type="text"
                        name="termDuration"
                        placeholder="Enter Number of Months / Years, or in Perpetuity"
                        required
                        value={formData.termDuration}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="recordingTitle">
                      <Form.Label>Recording Title</Form.Label>
                      <Form.Control
                        type="text"
                        name="recordingTitle"
                        placeholder="Enter Your Recording Title"
                        required
                        value={formData.recordingTitle}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="recordingArtist">
                      <Form.Label>Territory</Form.Label>
                      <Form.Control
                        type="text"
                        name="territory"
                        placeholder="Enter Territory"
                        required
                        value={formData.territory}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Row>
                  <div className="d-flex justify-content-between pt-3">
                    <ArrowLeft onClick={handlePrevious} style={{ fontSize: '24px', cursor: 'pointer', color: 'blue' }} />
                    {allFieldsFilledFour ? (
                      <ArrowRight onClick={handleNext} style={{ fontSize: '24px', cursor: 'pointer', color: 'blue' }} />
                    ) : (
                      <ArrowRight style={{ fontSize: '24px', cursor: 'pointer', color: 'black' }} />
                    )}
                  </div>
                  {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                </>
              )}
              {step === 5 && (
                <>
                  <Row>
                  <Form.Group className="mb-3" controlId="distributionCompany">
                    <Form.Label>Brief Synopsis of Project</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={10} // Adjust the number of rows as needed
                      name="synopsis"
                      placeholder="Provide a brief synopsis of the project"
                      required
                      value={formData.synopsis}
                      onChange={handleChange}
                    />
                  </Form.Group>                
                  </Row>
                  <div className="d-flex justify-content-between pt-3">
                    <ArrowLeft onClick={handlePrevious} style={{ fontSize: '24px', cursor: 'pointer', color: 'blue' }} />
                    {allFieldsFilledFive ? (
                      <ArrowRight onClick={handleNext} style={{ fontSize: '24px', cursor: 'pointer', color: 'blue' }} />
                    ) : (
                      <ArrowRight style={{ fontSize: '24px', cursor: 'pointer', color: 'black' }} />
                    )}
                  </div>
                  {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                </>
              )}
              {step === 6 && (
                <>
                  <Row>
                  <Form.Group className="mb-3" controlId="distributionCompany">
                    <Form.Label>Description Of Use</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={6} // Adjust the number of rows as needed
                      name="descriptionOfUse"
                      placeholder="Describe use of recording in the scene"
                      required
                      value={formData.descriptionOfUse}
                      onChange={handleChange}
                    />
                  </Form.Group>   
                  <Form.Group className="mb-3" controlId="recordingArtist">
                      <Form.Label>Nature Of Use</Form.Label>
                      <Form.Control
                        type="text"
                        name="natureOfUse"
                        placeholder="Main title, end credit, background, etc."
                        required
                        value={formData.natureOfUse}
                        onChange={handleChange}
                      />
                    </Form.Group>            
                  </Row>
                  <div className="d-flex justify-content-between pt-3">
                    <ArrowLeft onClick={handlePrevious} style={{ fontSize: '24px', cursor: 'pointer', color: 'blue' }} />
                    {allFieldsFilledSix ? (
                      <ArrowRight onClick={handleNext} style={{ fontSize: '24px', cursor: 'pointer', color: 'blue' }} />
                    ) : (
                      <ArrowRight style={{ fontSize: '24px', cursor: 'pointer', color: 'black' }} />
                    )}
                  </div>
                  {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                </>
              )}
              {step === 7 && (
                <>
                  <Row>
                  <Form.Group className="mb-3" controlId="distributionCompany">
                  <Form.Label>Production Budget</Form.Label>
                    <Form.Control
                      type="text"
                      name="productionBudget"
                      placeholder="Enter the production budget in USD (e.g., $50,000)"
                      required
                      value={formData.productionBudget}
                      onChange={handleChange}
                    />
                  </Form.Group>   
                  <Form.Group className="mb-3" controlId="recordingArtist">
                    <Form.Label>Music Budget</Form.Label>
                    <Form.Control
                      type="text"
                      name="musicBudget"
                      placeholder="Enter the music budget in USD (e.g., $50,000)"
                      required
                      value={formData.musicBudget}
                      onChange={handleChange}
                    />
                  </Form.Group>          
                  </Row>
                  <div className="d-flex justify-content-between pt-3">
                    <ArrowLeft onClick={handlePrevious} style={{ fontSize: '24px', cursor: 'pointer', color: 'blue' }} />
                    {allFieldsFilledSeven ? (
                      <ArrowRight onClick={handleNext} style={{ fontSize: '24px', cursor: 'pointer', color: 'blue' }} />
                    ) : (
                      <ArrowRight style={{ fontSize: '24px', cursor: 'pointer', color: 'black' }} />
                    )}
                  </div>
                  {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                </>
              )}
              {step === 8 && !showAnimation && (
                <>
                  <Row>
                  <Form.Group className="mb-3" controlId="distributionCompany">
                  <Form.Label>Any Additional Information / Comments You Would Like To Include?</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={8} // Adjust the number of rows as needed
                      name="additionalInformation"
                      placeholder="Enter any additional information here..."
                      required
                      value={formData.additionalInformation}
                      onChange={handleChange}
                    />
                  </Form.Group>     
                  </Row>
                  <div className="d-flex justify-content-between pt-3">
                    <ArrowLeft onClick={handlePrevious} style={{ fontSize: '24px', cursor: 'pointer', color: 'blue' }} />
                    <CheckAll onClick={handleSubmit} style={{ fontSize: '24px', cursor: 'pointer', color: 'blue' }} />
                  </div>
                  {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                </>
              )}
              {step === 8 && showAnimation && (
                <Container className="mt-5">
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                  }}>
                    <Lottie animationData={CheckMark} style={{ width: '25%', height: '25%' }} loop="false" />
                  </div>
                </Container>
              )}
            </Form>
            {!showAnimation && (
              <div style={{ paddingTop: '30px' }}>
                <ProgressBar now={((step - 1) / 7) * 100} style={{ height: '10px' }} />
              </div>
            )}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default RequestForm;

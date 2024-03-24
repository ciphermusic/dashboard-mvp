'use client'
// import node module libraries
import { Fragment } from "react";
import Link from 'next/link';
import { Container, Col, Row } from 'react-bootstrap';

// import widget/custom components
import { StatRightTopIcon } from "widgets";

// import sub components
import { ActiveProjects, Teams, 
    TasksPerformance 
} from "sub-components";

// import required data files
import ProjectsStatsData from "data/dashboard/ProjectsStatsData";

import { useAuth } from '../authcontext';
// import LandingPage from './pages/landing-page';
// app/(dashboard)/page.js

const Home = () => {
    const { isLoggedIn } = useAuth();
        
    return (   
        <div>
            {isLoggedIn() ? (
                <Fragment>
                    <div className="bg-primary pt-10 pb-21"></div>
                    <Container fluid className="mt-n22 px-6">
                        <Row>
                            <Col lg={12} md={12} xs={12}>
                                {/* Page header */}
                                <div>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="mb-3 mb-lg-0">
                                            <h3 className="mb-0  text-white" style={{ fontSize: '36px', fontWeight: 'bold' }}>Deals</h3>
                                        </div>
                                        {/* <div>
                                            <Link href="#" className="btn btn-white">Create New Project</Link>
                                        </div> */}
                                    </div>
                                </div>
                            </Col>
                            <Row className="justify-content-center">
                                {ProjectsStatsData.map((item, index) => {
                                    return (
                                        <Col xl={3} lg={6} md={12} xs={12} className="mt-6" key={index}>
                                            <StatRightTopIcon info={item} />
                                        </Col>
                                    );
                                })}
                            </Row>
                        </Row>

                        {/* Active Projects  */}
                        <ActiveProjects />

                        <Row className="my-6">
                            <Col xl={4} lg={12} md={12} xs={12} className="mb-6 mb-xl-0">

                                {/* Tasks Performance  */}
                                <TasksPerformance />

                            </Col>
                            {/* card  */}
                            <Col xl={8} lg={12} md={12} xs={12}>

                                {/* Teams  */}
                                <Teams />

                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            ) : (
                <Container className="d-flex vh-100">
                    <Row className="m-auto align-self-center">
                        <Col className="text-center">
                        <h1 className='mb-5'>Cipher</h1>
                        <p>The Infrastructure of the Modern Music Industry</p>
                        </Col>
                    </Row>
                </Container>
            )}
        </div>
    )
}
export default Home;

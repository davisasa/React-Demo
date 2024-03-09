import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>

        <Container fluid style={{backgroundColor:'rgba(0, 0, 0, 0.1)', height:'45vh', paddingTop:'80px'}}>
            <Row className='footer'>

                <Col>
                </Col>

                <Col>
                    <div>
                        <h6>
                             Company
                        </h6>

                        <ul>
                            <li><Link className='link'>Home</Link></li>
                            <li><Link className='link'>About Us</Link></li>
                            <li><Link className='link'>Careers</Link></li>
                        </ul>
                    </div>
                </Col>

                <Col xs={3}>
                    <div>
                            <h6>
                                Public Utilities
                            </h6>

                            <ul>
                                <li><Link className='link'>Operations & Maintenance</Link></li>
                                <li><Link className='link'>Infrastructure Rehabilitation</Link></li>
                                <li><Link className='link'>Engineering and Consulting</Link></li>
                                <li><Link className='link'>Process Control Monitoring</Link></li>
                                <li><Link className='link'>Investor-Owned Utility Management </Link></li>
                            </ul>
                        </div>

                </Col>

                <Col xs={3}>
                    <div>
                            <h6>
                                Industrial Services
                            </h6>

                            <ul>
                                <li><Link className='link'> Operations & Maintenance</Link></li>
                                <li><Link className='link'>Technical Support </Link></li>
                                <li><Link className='link'>Maintenance & Capital Improvements</Link></li>
                                <li><Link className='link'>Process Control Monitoring</Link></li>
                            </ul>
                        </div>
                </Col>

                <Col>
                    <div>
                            <h6>
                                Resources
                            </h6>

                            <ul>
                            <li><Link className='link'> News & Insights</Link></li>
                                <li><Link className='link'>Contact Us </Link></li>
                                <li><Link className='link'>Employee Portal</Link></li>
                                <li><Link className='link'>Pay Residential Bill</Link></li>
                            </ul>
                        </div>

                        




                </Col>

                <Col>
                </Col>

            </Row>
        </Container>

        <Container fluid style={{backgroundColor:'#04304a'}}>
            <Row>
                <Col>
                </Col>

                <Col xs={6} style={{textAlign:'center', height:'7vh', paddingTop:'15px'}}>
                     <p style={{ color:'#fff'}}>Copyright © 2024 U.S. Water Services Corporation. Site Credit.</p>
                </Col>

                <Col>
                </Col>
            </Row>
        </Container>


    </div>
  )
}

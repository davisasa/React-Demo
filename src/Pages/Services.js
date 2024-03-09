import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import { Link } from 'react-router-dom'



export default function Services() {
  return (
            <div>

                    <Container fluid style={{backgroundImage: "url(./images/steel-pipelines-cables-plant.jpg)", backgroundRepeat: 'no-repeat' ,backgroundSize:'cover' , height: '70vh',padding:'0', marginBottom:'50px', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: '2'}}>

                    <Row style={{height: '70vh', width: '100vw', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '1', position: 'relative'}}>
                            <Col>
                            </Col>

                            <Col xs={10} style={{display:'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <div style={{display: 'flex', flexDirection:'column', alignItems:'center', justifyContent: 'center', color:'#fff'}}>
                            <h1>
                            Industrial Operations & Maintenance
                            </h1>

                            <p style={{color:'#fff',fontSize: '27px', textAlign: 'center', width: '70%', display: 'flex', alignItems: 'center', justifyContent:'center' }}>
                            Grid Water’s Industrial Group specializes in delivering high-quality, customized O&M solutions for business-critical industrial treatment systems.
                            </p>
                            </div>

                            <div style={{display: 'flex', justifyContent: 'center'}}>
                            <button style={{width : '20%', backgroundColor: '#006eb6', border: 'none', height: '50px',color:'#fff'}}>
                                DOWNLOAD OUR FACTSHEET
                            </button>
                            </div>
                            </Col>

                            <Col>
                            </Col>

                    </Row>
                    </Container>

                    <Container style={{height:'45vh',paddingTop:'30px'}}>

                    <Row>

                    <Col></Col>
                    <Col  xs={3}>
                        <div>
                        <h1 style={{color:'#006eb6', textAlign:'left'}}>
                        Our Approach

                    </h1>

                    <p style={{color:'#41b3e4', fontSize:'20px'}}>
                    Our unique operations & maintenance (O&M) approach, tailored to the diverse technologies used in 
                    industrial applications, guarantees both short-term and long-term operational efficiencies.

                    </p>
                        </div>
                    </Col>

                    <Col></Col>

                    <Col xs={6}>

                    <p style={{fontSize:'20px'}}>
                    We prioritize long-term cost predictability and operational reliability. 
                    With qualified on-site staff, bolstered by our in-house Technical Support Group, 
                    a dedicated maintenance team, and our proprietary operations software—Process Control Monitoring™ (PCM) 
                    system—we provide comprehensive support to optimize your operations. By minimizing risk exposure and streamlining 
                    facility operations, we offer peace of mind, enabling you to focus on your core business while ensuring your facility
                    runs efficiently.
                    </p>
                    </Col>

                    <Col></Col>
                    </Row>
                    </Container>


                    <Container fluid>
                        
                            <Row style={{height:'55vh',paddingTop:'60px', backgroundColor:'#04304a', color: '#fff'}}>
                                <Col xs={1}></Col>

                                <Col xs={4}>
                                    <div>
                                    <img style={{height: '40vh',padding:'0', borderRadius:'40px'}} src="/images/4-USW-current-homepage-2.jpeg" alt="water" />
                                    </div>
                                </Col>

                                <Col xs={5}>

                                <h1 style={{textAlign:'left'}}>
                                Professional Service Teams
                                </h1>

                                <p style={{fontSize:'17px', color:'#fff'}}>
                                    Our professional service teams deliver quality, safe, and sustainable
                                    O&M services tailored to your specific needs. Our in-house staff comprises 
                                    licensed operators, project managers, specialized engineers, tradespeople, 
                                    wastewater treatment experts, and certified laboratory professionals. 
                                    You’ll have access to 24/7 support, including emergency response and 
                                    engineering expertise. Our award-winning service teams operate from nationwide 
                                    offices, combining local knowledge with a national presence.
                                </p>

                                <button style={{backgroundColor:'#41b3e4', width:"150px",color:"#fff",height:"35px", border:"none"}}>
                                    Learn More
                                </button>
                                </Col>

                                <Col></Col>
                            </Row>
                    </Container>

                    <Container fluid>
                        
                            <Row style={{height:'55vh',paddingTop:'60px', color: '#000'}}>
                                <Col xs={1}></Col>

                                <Col xs={5}>

                                <h1 style={{textAlign:'left'}}>
                                    Water Consumption Calculator
                                </h1>

                                <p>
                                    Calculate your water footprint and make a splash in conservation! 
                                    Use our Water Consumption Calculator to measure your usage and join 
                                    the wave of sustainable living. Effortlessly track and manage your water 
                                    usage with our Water Consumption Calculator. Discover your environmental impact, 
                                    set conservation goals, and contribute to a sustainable future. Every drop 
                                    counts! #WaterConservation #CalculateSustainably
                                </p>

                                <Link to="/WaterConsumptionApp">
                                    <button style={{backgroundColor:'#41b3e4', width:"150px",color:"#fff",height:"35px", border:"none"}}>
                                        Calculate
                                    </button>
                                </Link>
                                </Col>

                                <Col xs={4}>
                                    <div>
                                    <img style={{height: '40vh',padding:'0', borderRadius:'40px'}} src="/images/steel-pipelines-cables-plant (4).jpg" alt="water" />
                                    </div>
                                </Col>

                                <Col></Col>
                            </Row>
                    </Container>

            </div>

            


            

  )
}

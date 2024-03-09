import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



export default function Home() {
  return (
    <div>

        <Container fluid style={{backgroundImage: "url(./images/steel-pipelines-cables-plant.jpg)", backgroundRepeat: 'no-repeat' ,backgroundSize:'cover' , height: '70vh',padding:'0', marginBottom:'50px', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: '2'}}>

            <Row style={{height: '70vh', width: '101vw', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '1', position: 'relative'}}>
              {/* <img style={{height: '70vh',padding:'0', marginBottom:'50px'}} src="/images/steel-pipelines-cables-plant.jpg" alt="water" /> */}
                    <Col>
                    </Col>

                    <Col xs={10} style={{display:'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                    <p style={{color:'#fff', fontSize: '27px', textAlign: 'center', width: '70%', display: 'flex', alignItems: 'center', justifyContent:'center' }}>
                    Grid Water is committed to being an essential part of the communities we serve. Through close collaboration with the communities in which we work, we foster strong relationships and partnerships.
                    </p>
                    </div>

                    <div style={{display: 'flex', justifyContent: 'center'}}>
                    <button style={{color:'#fff',width : '10% !important', backgroundColor: '#006eb6', border: 'none', height: '50px' }}>
                        CONTACT US
                    </button>
                    </div>
                    </Col>

                    <Col>
                    </Col>
              
            </Row>
        </Container>

        <Container>

            <Row style={{marginBottom:'50px'}}>
                <Col xs={5}>
                    <div>
                    <img style={{height: '40vh',padding:'0', borderRadius:'40px'}} src="/images/4-USW-current-homepage-2.jpeg" alt="water" />
                    </div>
                </Col>

                <Col xs={7}>

                <h1>
                We provide exceptional quality and <br/>  expertise for our clients.
                </h1>

                <p>
                Grid Water is recognized throughout the industry for providing unparalleled technical support and delivering the most advanced water and wastewater treatment solutions to governments, industries, cities, investor-owned utilities, districts, and organizations that serve more than 1 million end customers.
                <br/>
                <br/>
                We operate and maintain facilities across the United States with experience in virtually every type of treatment technology currently utilized in the treatment of water and wastewater. 
                </p>
                </Col>
            </Row>
        </Container>

        <Container fluid style={{backgroundImage: "url(./images/4-USW-current-homepage-2.jpeg)", backgroundRepeat: 'no-repeat' ,backgroundSize:'cover' , height: '60vh',padding:'0', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: '2', backgroundosition: 'center bottom'}}>

            <Row style={{height: '60vh', width: '100vw', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '1', position: 'relative'}}>
              {/* <img style={{height: '70vh',padding:'0', marginBottom:'50px'}} src="/images/steel-pipelines-cables-plant.jpg" alt="water" /> */}
                    <Col>
                    </Col>

                    <Col xs={10} style={{display:'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <div style={{display: 'flex', justifyContent: 'center', lineHeight:'50px'}}>
                    <p style={{color:'#fff', fontSize: '29px', fontWeight:'800', textAlign: 'center', width: '70%', display: 'flex', alignItems: 'center', justifyContent:'center' }}>
                    As an employee-owned company, we are known for quality operations, compliance, safety, and for providing innovative solutions to operational challenges.
                    </p>
                    </div>

                    </Col>

                    <Col>
                    </Col>
              
            </Row>
        </Container>

        <Container fluid style={{height: '60vh', backgroundColor: '#04304a', paddingTop: '130px', color: '#fff'}}>

            <Row>
                    <Col>
                    </Col>

                    <Col xs={5}>
                        <div>
                            <h1 style={{textAlign:'left'}}>
                                Partner with Grid Water
                            </h1>
                        </div>

                        <div>
                            <button style={{backgroundColor:'#41b3e4',marginRight:'40px', width:"150px",color:"#fff",height:"35px", border:"none"}}>
                                Public Utilities
                            </button>

                            <button style={{backgroundColor:'#41b3e4', width:"150px",color:"#fff",height:"35px", border:"none"}}>
                                Industrial
                            </button>
                        </div>
                    </Col>

                    <Col xs={5}>
                        <div>
                            <p style={{color:'#fff'}}>
                            At Grid Water, we have always approached a contract to operate water and wastewater facilities as a partnership with our client, local officials, and the community at large. We understand the true meaning of a partnership. It is not a business development slogan to us. Through years of experience, U.S. Water has developed relationships with our clients that provide a platform of trust. U.S. Water is proud to say that after 20 years, we still serve our first client.
                            </p>
                        </div>
                    </Col>

                    <Col>
                    </Col>
              
            </Row>
        </Container>

        <Container fluid style={{height: '50vh', backgroundColor: '#fff', paddingTop: '130px'}}>

            <Row>
                    <Col>
                    </Col>

                    <Col xs={4} style={{backgroundColor: '#fff' ,padding: '80px 50px 0px 50px', border: '1px transparent solid', height:'50vh', paddingTop: '80px', borderRadius: '5px', marginTop: '-220px',position:'relative', zIndex:'2', boxShadow: '0px 2px 5px gray'}}>
                        <div>
                            <h1 style={{textAlign:"left"}}>
                            Public Utilities
                            </h1>

                            <p>
                            Grid Water serves Public Utilities across the nation in the water and wastewater sector. Our services encompass operations and maintenance, ensuring regulatory compliance, safeguarding public health, and preserving financial assets.
                            </p>
                        </div>

                        <div>
                            <button style={{backgroundColor:'#41b3e4', width:"150px",color:"#fff",height:"35px", border:"none"}}>
                                Learn More
                            </button>
                        </div>
                    </Col>

                    <Col></Col>

                    <Col xs={4} style={{backgroundColor: '#fff' ,border: '1px transparent solid', height:'50vh', padding: '80px 50px 0px 50px', borderRadius: '10px', marginTop: '-220px',position:'relative', zIndex:'2', boxShadow: '0px 2px 5px gray'}}>
                    <div>
                            <h1 style={{textAlign:"left"}}>
                                Industrial
                            </h1>

                            <p>
                            Grid Water specializes in the water and wastewater treatment requirements of Industrial clients. We understand the complexity of industrial treatment systems and offer services that enable our clients to concentrate on their core business activities.
                            </p>
                        </div>

                        <div>
                            <button style={{backgroundColor:'#41b3e4', width:"150px",color:"#fff",height:"35px", border:"none"}}>
                                Learn More
                            </button>
                        </div>
                    </Col>

                    <Col>
                    </Col>
              
            </Row>
        </Container>

        <Container fluid style={{backgroundColor: '#04304a', height: '35vh', paddingTop:'40px'}}>
            <Row>

                <Col>
                </Col>

                <Col xs={10}>
                    <h1 style={{textAlign:'center', color: '#fff', marginBottom: '40px'}}>
                    Sign Up For Our Newsletter
                    </h1>

                    <div>

                        <Form style={{display:'flex', justifyContent:'space-between'}}>
                        <Form.Group className="mb-3 mb-3Home" controlId="formBasicEmail">
                            <Form.Label style={{color: '#fff !important'}}>Fisrt Name</Form.Label>
                            <Form.Control style={{width:'18vw'}} type="text" placeholder="Fisrt Name" />
                        </Form.Group>

                        <Form.Group className="mb-3 mb-3Home" controlId="formBasicPassword">
                            <Form.Label style={{color: '#fff !important'}}>Last Name</Form.Label>
                            <Form.Control style={{width:'18vw'}} type="text" placeholder="Last Name" />
                        </Form.Group>

                        <Form.Group className="mb-3 mb-3Home" controlId="formBasicEmail">
                            <Form.Label style={{color: '#fff !important'}}>Email address</Form.Label>
                            <Form.Control style={{width:'18vw'}} type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Button style={{width:'18vw', height:'40px', marginTop:'30px' }} variant="primary" type="submit">
                            Submit
                        </Button>
                        </Form>

                    </div>

                </Col>

                <Col>
                </Col>

            </Row>
        </Container>

    </div>
  )
}

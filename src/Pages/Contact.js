import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from "react-bootstrap"

export default function Contact() {
  return (

    <div>

            <Container fluid >

            <Row >
            <img style={{height: '70vh',padding:'0', marginBottom:'50px'}} src="/images/contact-register-feedback-support-help-concept.jpg" alt="water" />
            </Row>
            </Container>

            <Container>


            <Row>

            <Col>
            </Col>

            <Col xs={6}>

            <div style={{width:'100%', boxShadow: '0px 2px 5px gray', borderRadius: '5px', border: '1px transparent solid', marginBottom:'90px'}}>
            <h1 style={{paddingTop:'20px'}}>
            Get In Touch With us
            </h1>

            <Form style={{padding:'20px 70px 60px 50px'}}>
            <Form.Group className="mb-3 mb-3Contact" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter full name" />
            </Form.Group>

            <Form.Group className="mb-3 mb-3Contact" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />

            </Form.Group><Form.Group className="mb-3 mb-3Contact" controlId="formBasicEmail">
            <Form.Label>Phone Number
            </Form.Label>
            <Form.Control type="number" placeholder="Enter phone number" />
            </Form.Group>

            <Form.Group className="mb-3 mb-3Contact" controlId="formBasicPassword">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={5}  type="text" placeholder="Make an Enquiry" />
            </Form.Group>

            <Button variant="primary" type="submit">
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

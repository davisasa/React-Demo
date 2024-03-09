import React from 'react'
import {NavLink} from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button'



export default function Navbar() {
  return (

    <Container fluid style={{backgroundColor:'rgba(0, 0, 0, 0.1)'}}>
      <Row style={{
    height: "10vh", 
    display: "flex", 
    alignItems: "center", 
    justifyContent : "space-around"} }>
        <Col style={{ width:"70%"}}>
            <h3> Grid Water Company</h3>
        </Col>

        <Col xs={6} style={{ display: "flex", 
    alignItems: "left", 
    justifyContent : "space-around"} }>
        <NavLink style={{textDecoration: 'none', color:'#000', fontWeight:'600'}} to={"/"}> HOME</NavLink>
    <NavLink style={{textDecoration: 'none', color:'#000', fontWeight:'600'}} to={"/About"}> ABOUT</NavLink>
    <NavLink style={{textDecoration: 'none', color:'#000', fontWeight:'600'}} to={"/Services"}> SERVICES</NavLink>
    <NavLink style={{textDecoration: 'none', color:'#000', fontWeight:'600'}} to={"/Contact"}> CONTACT</NavLink>
        </Col>

        <Col style={{ display: "flex"} }>
        <Button variant="primary" type="submit" style={{backgroundColor:'#41b3e4', width:"130px",color:"#fff",height:"35px",marginRight:'20px', border:"none"}}>
        LOG IN
      </Button>
      <Button variant="primary" type="submit" style={{backgroundColor:'#41b3e4', width:"130px",color:"#fff",height:"35px", border:"none"}}>
        SIGN UP
       </Button>
        </Col>
      </Row>
    </Container>
  )
}
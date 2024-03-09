import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import {Link} from "react-router-dom"

export default function About() {
  return (
    <div>

<Container fluid style={{backgroundImage: "url(./images/cooling-tower.jpg)", backgroundRepeat: 'no-repeat' ,backgroundSize:'cover' , height: '70vh',padding:'0', marginBottom:'50px', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: '2'}}>

<Row style={{height: '70vh', width: '101vw', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '1', position: 'relative'}}>
  {/* <img style={{height: '70vh',padding:'0', marginBottom:'50px'}} src="/images/steel-pipelines-cables-plant.jpg" alt="water" /> */}
        <Col>
        </Col>

        <Col xs={10} style={{display:'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <p style={{color:'#fff', fontSize: '50px', textAlign: 'center', width: '70%', display: 'flex', alignItems: 'center', justifyContent:'center' }}>
        Employee-Owned and Operated, Providing Innovative Water Solutions to Clients Nationwide
        </p>
        </div>

        </Col>

        <Col>
        </Col>
  
</Row>
</Container>


    

        <Container>

            <Row>
                <Col>
                    <div>
                        <h2>ABOUT THIS APP</h2>

                        <div style={{display:'flex', flexDirection:'column'}}>
                            <Link className='aboutLink'> OVERVIEW</Link>
                            <Link className='aboutLink'> TERMS AND CONDITION</Link>
                            <Link className='aboutLink'> PRIVACY POLICY</Link>
                            <Link className='aboutLink'> HELP & SUPPORT</Link>
                            <Link className='aboutLink'> REFUND POLICY</Link>
                        </div>
                    </div>
                </Col>

                <Col xs={9}>

                <h1>
                    HOW TO USE THIS APP
                </h1>

                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et volutpat sem, nec cursus augue. <br/>Pellentesque in pellentesque augue, vitae fermentum magna. Suspendisse fringilla accumsan urna, id viverra nisl vestibulum ut. Donec ullamcorper semper arcu, vel sagittis orci aliquam non. Nunc egestas, nisl et porta commodo, mi nisi gravida justo, quis finibus mauris erat ac felis. Aliquam pharetra odio sed rhoncus tincidunt. <br/><br/>Donec vitae sem massa.

Cras vulputate est sit amet dignissim hendrerit. Mauris at urna bibendum, auctor orci a, consectetur libero. Duis malesuada nibh diam, vel scelerisque ex sodales in. Nulla non aliquam nisl. Nunc non erat semper, congue tellus suscipit, pellentesque diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta nulla ac purus sagittis placerat. Vivamus iaculis ex a maximus efficitur. Proin pellentesque elit diam, vel malesuada justo tempus quis. <br/><br/> Cras lorem quam, congue ac quam et, ultrices tincidunt velit.

Vivamus quis nisl imperdiet, maximus turpis non, luctus velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas sapien magna, faucibus a consectetur id, auctor at quam. Suspendisse turpis quam, cursus et purus quis, placerat mollis eros. Proin imperdiet pulvinar risus, sed viverra ante sollicitudin id. Nunc ullamcorper neque eu dolor convallis, in fermentum nunc feugiat. Cras tempor ultricies orci, at commodo leo. Sed volutpat pulvinar sapien id viverra. <br/><br/>In hac habitasse platea dictumst. Sed pellentesque orci dolor, eu pretium arcu facilisis id. Morbi leo nisi, malesuada eu porttitor non, elementum sit amet libero. Etiam tristique nisi nec magna eleifend sollicitudin. Vestibulum sed risus eu urna tincidunt semper et non nisi. Fusce lacus orci, accumsan et nunc quis, imperdiet sodales nisi. Phasellus malesuada sollicitudin justo, vel ullamcorper neque.

Praesent eget tempus nibh, id maximus massa. <br/><br/>Sed quis cursus arcu. Praesent euismod odio vestibulum sem commodo egestas. Vestibulum at eleifend massa. Pellentesque sodales a magna id iaculis. Integer turpis tortor, pretium fringilla lacinia sit amet, bibendum id tortor. Cras fringilla ex justo, vitae pellentesque eros malesuada non. Suspendisse nisi lorem, hendrerit ac purus eget, pulvinar placerat quam. Integer vel ultrices eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed lacinia facilisis malesuada.

Curabitur nec nunc accumsan, tincidunt urna sed, gravida libero. Sed non arcu eu odio molestie varius a vel elit. Vivamus lectus leo, aliquam ut quam et, malesuada euismod odio. Cras vestibulum lectus id eros convallis, ut pellentesque ante bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In ut eros id orci lobortis varius. Sed eu volutpat turpis.
                </p>
                </Col>
            </Row>
        </Container>

    </div>
  )
}

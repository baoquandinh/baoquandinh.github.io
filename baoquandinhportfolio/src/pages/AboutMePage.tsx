import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image } from 'react-bootstrap'
import { AboutMeDescription } from '../components/AboutMe/AboutMeDescription'

export const AboutMePage = () => {
    return <Container style={{height: '100vh'}}>
        <Row className="h-100">
            {/* <Col data-aos="fade-right" data-aos-duration='2000' style={{marginTop: '15%'}} md={4}>
                <Image style={{ height: '250px', width: '240px' }} src={`${process.env.PUBLIC_URL}/images/test-profile.jpg`} roundedCircle />
            </Col> */}
            <Col md={12} style={{ paddingLeft: '40px', marginTop: '15%' }}>
                <AboutMeDescription />
            </Col>
            <Col data-aos="fade-in" data-aos-duration="2000" data-aos-delay="1500" md={12}><p>Scroll Down</p></Col>
        </Row>
    </Container>
}
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image } from 'react-bootstrap'
import { AboutMeDescription } from '../components/AboutMe/AboutMeDescription'

export const AboutMePage = () => {
    return <Container id="about-me-container">
        <Row className="align-items-center" style={{height: "100vh"}}>
            <Col md={12}>
                <AboutMeDescription />
            </Col>
            <Col style={{cursor:"pointer"}} data-aos="fade-in" data-aos-duration="2000" data-aos-delay="2000" data-aos-anchor-placement="contact-me-container" md={12}><p>Scroll Down</p></Col>
        </Row>
    </Container>
}
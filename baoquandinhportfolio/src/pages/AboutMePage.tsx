import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image } from 'react-bootstrap'
import { AboutMeDescription } from '../components/AboutMe/AboutMeDescription'

export const AboutMePage = () => {
    return <Container style={{ height: "90vh" }}>
        <Row className="h-100">
            <Col className="my-auto" md={4}>
                <Image style={{ height: '250px', width: '240px' }} src={`${process.env.PUBLIC_URL}/images/test-profile.jpg`} roundedCircle />
            </Col>
            <Col style={{paddingLeft: '40px'}} className="my-auto">
                <AboutMeDescription />
            </Col>
        </Row>
    </Container>
}
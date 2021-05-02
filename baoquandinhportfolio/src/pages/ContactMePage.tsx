import { ContactMeForm } from '../components/ContactMe/ContactMeForm'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ContactMePage = () => {
    return <Container>
        <Row className="h-100" style={{ paddingBottom: '10px' }}>
            <Col><h1>Contact Me</h1></Col>
        </Row>
        <ContactMeForm />
    </Container>
}
import { Fragment } from 'react'
import { Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export const AboutMeDescription = () => {
    return <Fragment>
        <Row>
            <Col style={{ textAlign: 'left' }} md={12}><h1>Hello, I'm Baoquan Dinh</h1></Col>
            <Col style={{ textAlign: 'left' }} md={12}><h3>A Front-End Developer</h3></Col>
        </Row>
        <Row>
            <Col style={{ textAlign: 'left' }} md={7}><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p></Col>
        </Row>
    </Fragment>
}
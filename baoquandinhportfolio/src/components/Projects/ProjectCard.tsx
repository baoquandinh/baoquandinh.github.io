import { Component, Fragment } from 'react'
import { IProject } from './models/Project'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Card } from 'react-bootstrap'

interface IProp {
    project: IProject;
}
interface IState { }

export class ProjectCard extends Component<IProp, IState> {
    constructor(props: IProp) {
        super(props)
    }
    render() {
        const { project } = this.props
        return <div style={{ height: "100%" }}>
            <Row id="img-overlay" style={{ position: 'absolute', width: '100%', height: '100%', opacity: '1', zIndex: 1, backgroundColor: 'black', marginLeft: "auto" }} >
                <Col className="text-center" style={{ textAlign: "center", width: '100%' }} md={12}><h2>{project.name}</h2></Col>
                <Col md={12}><p>{project.description}</p></Col>
                <Col style={{ bottom: '0px' }} md={12}><Button onClick={this.handleSubmit}>Show Me</Button></Col>
            </Row>
            <img width='100%' src={`${process.env.PUBLIC_URL}/images/${project.imageName}.png`} alt={`Image of ${project.imageName}`} />
        </div>
    }
}
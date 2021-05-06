import { Component, Fragment } from 'react'
import { IProject } from './models/Project'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/ProjectCard.css'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'

interface IProp {
    project: IProject;
}
interface IState { }

export class ProjectCard extends Component<IProp, IState> {
    constructor(props: IProp) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(link: string){
        window.open(link, '_blank')
    }
    render() {
        const { project } = this.props
        return <Card style={{ height: "100%" }}>
            <Card.Img id={`${project.imageName}-image`} src={`${process.env.PUBLIC_URL}/images/${project.imageName}.png`} alt={`Image of ${project.imageName}`} style={{ height: "100%" }}></Card.Img>
            <Card.ImgOverlay id={`${project.imageName}-image-overlay`}>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Card.Text style={{position: "absolute", bottom: "10%", left: "40%"}}><Button onClick={() => {this.handleClick(project.link)}}>Show Me</Button></Card.Text>
            </Card.ImgOverlay>
        </Card>
    }
}
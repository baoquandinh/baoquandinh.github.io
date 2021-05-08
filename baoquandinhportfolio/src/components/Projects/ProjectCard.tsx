import { Component, Fragment } from 'react'
import { IProject } from './models/Project'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/ProjectCard.css'
import '../../styles/Helper.css'
import { Container, Row, Col, Button, Card, Modal } from 'react-bootstrap'

interface IProp {
    project: IProject;
}
interface IState {
    currentModal: string
}

export class ProjectCard extends Component<IProp, IState> {
    constructor(props: IProp) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            currentModal: ''
        }
    }

    handleClick(projectName: string) {
        console.log(projectName)
        let modal = ''

        switch (projectName) {
            case 'something': {

                break;
            }
            default: {
                break;
            }
        }

        this.setState({
            currentModal: modal
        })

    }

    render() {
        const { project } = this.props
        return <Card style={{ height: "100%" }}>
            <Card.Img id={`${project.imageName}-image`} src={`${process.env.PUBLIC_URL}/images/${project.imageName}.png`} alt={`Image of ${project.imageName}`} style={{ height: "100%" }}></Card.Img>
            <Card.ImgOverlay id={`${project.imageName}-image-overlay`} style={{paddingTop: '15px'}}>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Card.Text style={{ position: "absolute", right: '0px', left: '0px', bottom: '25px' }}>
                    <Button onClick={() => { this.handleClick(project.projectHTMLName) }}>Show Me</Button>
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
    }
}
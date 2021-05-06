import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Helper.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { ProjectCard } from '../components/Projects/ProjectCard'
import { IProject } from '../components/Projects/models/Project'



export const ProjectsPage = () => {
    let projects: IProject[] = [{ name: 'Pixel Art Maker', description: 'Develop your pixel art on your own pixel canvas', imageName: 'pixel-maker', link: "https://codepen.io/baoquandinh/pen/ZojRpz" }, { name: 'Tic-Tac-Toe', description: 'Fancy a game of Tic-Tac-Toe?', imageName: 'memory-picture',link: "https://codepen.io/baoquandinh/pen/ZojRpz" }, { name: 'Memory Game', description: 'Test out your memory skills in this simple memory game', imageName: 'arcade-game' , link: "https://codepen.io/baoquandinh/pen/ZojRpz"}, { name: 'Yelplica', description: 'Yelp? Replica?', imageName: 'yelp-replica', link: "https://codepen.io/baoquandinh/pen/ZojRpz" }]
    return <Container fluid>
        <Row>
            {projects.map(project => {
                return <Col className="remove-padding" md={3} >
                    <ProjectCard project={project} />
                </Col>
            })}
        </Row>
    </Container>
}
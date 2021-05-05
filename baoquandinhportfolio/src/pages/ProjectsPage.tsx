import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Helper.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { ProjectCard } from '../components/Projects/ProjectCard'
import {IProject} from '../components/Projects/models/Project'



export const ProjectsPage = () => {
    let projects: IProject[] = [{ name: 'PixelArtMaker', description: 'Single page app, enabling user to develop their pixel art', imageName: 'pixel-maker' }, { name: 'FroggerReplica', description: 'A classic replication of the game "Frogger"', imageName: 'arcade-game' }, { name: 'MemoryGame', description: 'Test out your memory skills in this simple memory game', imageName: 'memory-picture' }, { name: 'YelpReplica', description: 'Yelp? Is that you?', imageName: 'yelp-replica' }]
    return <Container>
        <Row className="h-100">
            {projects.map(project => {
                return <Col className="test remove-padding" md={3} >
                    <ProjectCard project={project}/>
                </Col>
            })}
        </Row>
    </Container>
}
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Helper.css'
import { ProjectCard } from '../components/Projects/ProjectCard'
import { IProject } from '../components/Projects/models/Project'
import { Grid, Typography} from '@material-ui/core'



export const ProjectsPage = () => {
    let projects: IProject[] = [{ name: 'Pixel Art Maker', description: 'Develop your pixel art on your own pixel canvas', imageName: 'pixel-maker', projectHTMLName: "PixelMaker" }, { name: 'Tic-Tac-Toe', description: 'Fancy a game of Tic-Tac-Toe?', imageName: 'memory-picture', projectHTMLName: "https://codepen.io/baoquandinh/pen/ZojRpz" }, { name: 'Memory Game', description: 'Test out your memory skills in this simple memory game', imageName: 'arcade-game', projectHTMLName: "https://codepen.io/baoquandinh/pen/ZojRpz" }, { name: 'Yelplica', description: 'Yelp? Replica?', imageName: 'yelp-replica', projectHTMLName: "https://codepen.io/baoquandinh/pen/ZojRpz" }]
    return <Grid container justify="space-evenly" style={{height: "100vh"}} className="test">
        <Grid item xs={12} >
            <Typography color="textPrimary" variant="h2" component="h2" style={{paddingTop: "20px"}}>Projects</Typography>
        </Grid>
        {projects.map(project => {
            return <Grid key={project.name} item>
                <ProjectCard project={project}/>
            </Grid>
        })}
    </Grid>
}
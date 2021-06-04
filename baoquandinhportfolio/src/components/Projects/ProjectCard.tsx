import { Component, Fragment } from 'react'
import { IProject } from './models/Project'
import '../../styles/ProjectCard.css'
import '../../styles/Helper.css'
import { Card, CardActionArea, CardActions, Button, CardMedia, CardContent, Typography } from '@material-ui/core';

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
        return <Card data-aos="fade-out" data-aos-duration="2000" style={{ height: "300px", width: "250px"}}>
            <CardActionArea style={{position: "relative"}}>
                <CardMedia image={`${process.env.PUBLIC_URL}/images/${project.imageName}.png`} title={project.imageName} style={{height: "120px"}}/>
                <CardContent>
                    <Typography color="textPrimary" variant="h6" component="h5">{project.name}</Typography>
                    <Typography color="textSecondary" variant="body2" component="p">{project.description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions style={{position: "absolute", bottom: "0", left: "35%", right: "35%"}}>
                <Button size="small" color="primary">
                    Show Me
                </Button>
            </CardActions>
        </Card>
    }
}
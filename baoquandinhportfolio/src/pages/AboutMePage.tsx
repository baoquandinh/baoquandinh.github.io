import { AboutMeDescription } from '../components/AboutMe/AboutMeDescription'
import { Grid } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import '../styles/aboutme.css';
// import '../styles/Helper.css';

export const AboutMePage = () => {
    return <Grid container direction="column" justify="space-evenly" alignItems="center" style={{ height: "100vh" }} className="test">
        <Grid item>
            <AboutMeDescription />
        </Grid>
        <Grid item >
            <ArrowDownwardIcon id="about-me-arrowdown" fontSize="large" data-aos="fade-in" data-aos-duration="2000" data-aos-delay="2000"/>
        </Grid>
    </Grid>
}
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Grid, Typography } from '@material-ui/core';


export const AboutMeDescription = () => {
    return <Grid container direction="column" justify="center" alignItems="center" spacing={1}>
        <Grid item data-aos="fade-out" data-aos-duration='2000'>
            <Typography color="textPrimary" variant="h2" component="h2" >Hello, I'm Baoquan Dinh</Typography>
        </Grid>
        <Grid item data-aos="fade-out" data-aos-duration='2000' data-aos-delay='500'>
            <Typography color="textSecondary" variant="h5" component="h5">A Front-End Developer</Typography>
        </Grid>
        <Grid item sm={6} data-aos="fade-up" data-aos-duration='2000' data-aos-delay='1000'>
            <Typography component="p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</Typography>
        </Grid>
    </Grid>
}
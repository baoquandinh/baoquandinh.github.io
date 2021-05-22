import { ContactMeForm } from '../components/ContactMe/ContactMeForm'
import '../styles/Helper.css'
import { Grid, Typography, Paper } from "@material-ui/core";


export const ContactMePage = () => {
    return <Grid container direction="column" justify="space-evenly" alignItems="center" className="test" style={{ height: "100vh" }}>
        <Grid item>
            <Typography color="textPrimary" variant="h3" component="h3">Contact Me</Typography>
        </Grid>
        <Grid item>
            <Paper elevation={3}>
                <ContactMeForm />
            </Paper>
        </Grid>
    </Grid>
}
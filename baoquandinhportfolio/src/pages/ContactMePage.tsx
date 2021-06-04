import { ContactMeForm } from '../components/ContactMe/ContactMeForm'
import '../styles/Helper.css'
import { Grid, Typography, Paper } from '@material-ui/core';


export const ContactMePage = () => {
    return <Grid container direction="column" justifyContent="center" alignItems="center"  className="test" style={{ height: "100vh" }}>
        {/* <Grid item xs={12}>
            <Typography color="textPrimary" variant="h3" component="h3">Contact Me</Typography>
        </Grid> */}
        <Grid item xs={12}>
            <Paper elevation={3} style={{height: '100%'}}>
                <ContactMeForm />
            </Paper>
        </Grid>
    </Grid>
}
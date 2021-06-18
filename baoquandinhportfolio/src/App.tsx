import './App.css';
import './styles/Helper.css'
import { AboutMePage, SkillsPage, ProjectsPage, ContactMePage, WelcomePage } from './pages/index';
import Footer from './components/Footer/Footer';
import 'aos/dist/aos.css';
import AOS from 'aos'
import { Grid, Container } from '@material-ui/core'

function App() {
  AOS.init()
  return (
    <div className="App">
      {/* <Grid container direction="column">
        <Grid item className="test">Icon and Picture</Grid>
        <Grid item className="test">About me </Grid>
        <Grid item>
          <Footer />
        </Grid>
      </Grid> */}
      {/* <WelcomePage /> */}
      <Container>
        <AboutMePage />
        <ProjectsPage />
        <ContactMePage />
      </Container>
    </div>
  );
}

export default App;
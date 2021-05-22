import './App.css';
import { AboutMePage, SkillsPage, ProjectsPage, ContactMePage } from './pages/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos'
import { Container } from '@material-ui/core';

function App() {
  AOS.init()
  return (
    <div className="App">
      <Container maxWidth={false}>
        <AboutMePage />
        <ProjectsPage />
        <ContactMePage />
      </Container>
    </div>
  );
}

export default App;
import './App.css';
import { AboutMePage, SkillsPage, ProjectsPage, ContactMePage } from './pages/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos'

function App() {
  AOS.init()
  return (
    <div className="App">
      <AboutMePage />
      <ProjectsPage />
      <ContactMePage />
    </div>
  );
}

export default App;
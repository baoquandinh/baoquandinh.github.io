import './App.css';
import { AboutMePage, SkillsPage, ProjectsPage, ContactMePage } from './pages/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import { PortfolioNavbar } from './components/NavBar/PortfolioNavbar';
import 'aos/dist/aos.css';
import AOS from 'aos'

function App() {
  AOS.init()
  return (
    <div className="App" style={{ height: '100vh' }}>
      {/* <PortfolioNavbar />
      <Switch>
        <Route exact path='/' component={AboutMePage} />
        <Route path='/skills' component={SkillsPage} />
        <Route path='/projects' component={ProjectsPage} />
        <Route path='/contact' component={ContactMePage} />
      </Switch> */}
      {/* <div data-aos="fade-in" data-aos-duration="2000"> */}
      <AboutMePage />
      {/* </div> */}
      <ContactMePage />
    </div>
  );
}

export default App;
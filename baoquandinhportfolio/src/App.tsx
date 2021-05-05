import './App.css';
import { AboutMePage, SkillsPage, ProjectsPage, ContactMePage } from './pages/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap'
import { Link, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App" style={{height: '100vh'}}>
      <Navbar bg="dark" variant="dark" className="sticky-top">
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">About Me</Nav.Link>
            <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path='/'><AboutMePage /></Route>
        <Route exact path='/skills'><SkillsPage /></Route>
        <Route exact path='/projects'><ProjectsPage /></Route>
        <Route exact path='/contact'><ContactMePage /></Route>
      </Switch>
    </div>
  );
}

export default App;

import './App.css';
import { AboutMePage, SkillsPage, ProjectsPage, ContactMePage } from './pages/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import { PortfolioNavbar } from './components/NavBar/PortfolioNavbar';

function App() {
  return (
    <div className="App">
      <PortfolioNavbar />
      <Switch>
        <Route exact path='/' component={AboutMePage} />
        <Route path='/skills' component={SkillsPage} />
        <Route path='/projects' component={ProjectsPage} />
        <Route path='/contact' component={ContactMePage} />
      </Switch>
    </div>
  );
}

export default App;
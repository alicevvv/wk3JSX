import './App.css';
import './css/bootstrap.min.css';
import './css/main.css';
import {BrowserRouter,Route,Switch,Link} from "react-router-dom";
import home from './page/Home.js'
import Experience from './page/Experience';
import ExpInfoCards from './page/ExperienceCard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={home}/>
        <Route path="/experience" component={Experience} />
        <Route path="/experienceInfo/:expId" component={ExpInfoCards} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

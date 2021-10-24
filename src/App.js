import './App.css';
import './css/bootstrap.min.css';
import './css/main.css';
import home from './page/Home.js'
import {BrowserRouter,Route,Switch,Link} from "react-router-dom";
import Experience from './page/Experience';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={home}/>
        <Route path="/experience" component={Experience} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

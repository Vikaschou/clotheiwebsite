
import './App.css';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './Home';
import Saved from './Saved';
import Header from "./Header"
import Header2 from "./Header2"
import About from "./About"
import PleaseSelectTypeOfTshirt from "./PleaseSelectTypeOfTshirt"
import Pleaseselectjackettype from "./Pleaseselectjackettype"
import Pleaseselectshirttype from './Pleaseselectshirttype';
import Pleaseselectpanttype from './Pleaseselectpanttype';
function App() {
  return (
    <Router>
    <div className="App">
<Switch>
<Route path="/Pleaseselectpanttype">
<Pleaseselectpanttype/>
  </Route>
<Route path="/Pleaseselectshirttype">
<Pleaseselectshirttype/>
  </Route>
<Route path="/Pleaseselectjackettype">
<Pleaseselectjackettype/>
  </Route>
  <Route path="/PleaseSelectTypeOfTshirt">
<PleaseSelectTypeOfTshirt/>
  </Route>
<Route path="/About">
  <Header2/>
    <About/>
    </Route>
<Route path="/Saved">
    <Header2/>
    <Saved/>
   </Route>
  <Route path="/">
  <Header/>
    <Home/>
    </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;

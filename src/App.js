import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ExpandService from './components/ExpandService/ExpandService';
import engineer_data from './helpers/servicesData';
import { commissioning, test, control } from './helpers/servicesData';
import './App.css';
import 'aos/dist/aos.css';

function App() {

   
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path= "/servicios/ingenieria"><ExpandService data={engineer_data}/></Route>  
        <Route path="/servicios/puesta"><ExpandService data={commissioning}/></Route>
        <Route path="/servicios/ensayos"><ExpandService data={test}/></Route> 
        <Route path="/servicios/proteccion"><ExpandService data={control}/></Route>   
      </Switch>     
    </div>
    </Router>
  );
}

export default App;

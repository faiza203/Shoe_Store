import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage, LaunchPage, NavElement, LaunchShoePageOne, LaunchShoePageTwo, LaunchShoePageThere } from "./components/index";

function App() {
  return (
    <Router>
      <NavElement />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/Launch" component={LaunchPage} />
        <Route path="/air-jordan-3-valor-blue" component={LaunchShoePageOne} />
        <Route path="/jordan-mars-270-london" component={LaunchShoePageTwo} />
        <Route path="/air-jordan-1-zoom-racer-blue" component={LaunchShoePageThere} />
      </Switch>
    </Router>
  );
}

export default App;

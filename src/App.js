import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage, LaunchPage,LaunchIndexPage , NavElement } from "./components/index";

function App() {
  return (
    <Router>
      <NavElement />
      <Switch>
        <Route path="/" component={HomePage} exact={true}/>
        <Route path="/Launch" component={LaunchPage} />
        <Route path="/" component={LaunchIndexPage}/>
      </Switch>
    </Router>
  );
}

export default App;

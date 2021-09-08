import "./App.scss";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Nyc from "./components/NYC/nyc";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Nyc />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

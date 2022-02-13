import "./App.css";
import Homepage from "./pages/Homepage";
import GlobalStyle from "./globalStyles";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <GlobalStyle />
          <Route exact path="/" render={(props) => <Homepage />} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;

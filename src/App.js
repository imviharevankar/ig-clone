import "./App.scss";
import Main from "./components/Main";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./components/SignIn";
import Profile from "./components/Profile";

function App() {
  return (
    <Router className="app">
      <Switch>

        <Route path="/profile" exact component={Profile} />

        <Route path="/sign-in" exact component={SignIn} />

        <Route path="/" exact component={Main} />
      </Switch>
    </Router>
  );
}

export default App;

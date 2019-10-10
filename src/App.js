import React, { Component } from "react";
import Homepage from "./components/homepage/home";
import Results from "./components/resultspage/results";
import Spinner from "./components/LoadingSpinner/Spinner";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import store from "./ReduxBoilerPlate/store";
import { Provider } from "react-redux";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if (process.env.NODE_ENV === "production") {
  disableReactDevTools();
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/results/:songTitle" component={Results} />
            <Route path="/spinner" component={Spinner} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;

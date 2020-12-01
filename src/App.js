import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./actions";
import { React, useEffect } from "react";

import PrivateRoute from "./components/HOC/PrivateRoute";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  //componentDidMount or componentDidUpdate
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    if (auth.authenticate) {
      //dispatch(getInitialData());
    }
  }, auth.authenticate);
  return (
    <div className="App">
      <Switch>
        <PrivateRoute path="/" exact component={Home} />

        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;

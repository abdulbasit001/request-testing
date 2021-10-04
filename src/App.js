import React from "react";
import Header from "./Components/Header";
import { Route, Switch } from "react-router-dom";
import Sources from "./Pages/Sources";
import Headlines from "./Pages/Headlines";
const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/top-headlines" exact component={Headlines} />
        <Route path="/" exact component={Sources} />
      </Switch>
    </div>
  );
};
export default App;

import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Component/Pages/HomePage/homePage.component";
import HatsPage from "./Component/Pages/HatsPage/hatsPage.component";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/shop/hats" component={HatsPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;

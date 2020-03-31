import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Component/Pages/HomePage/homePage.component";
import HatsPage from "./Component/Pages/HatsPage/hatsPage.component";
import ShopPage from "./Component/Pages/Shop/shop.component";
import Header from "./Component/Header/header.component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/shop" component={ShopPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;

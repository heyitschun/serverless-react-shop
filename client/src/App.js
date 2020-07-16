import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./views/Home";
import Item from "./views/Item";
import Collection from "./views/Collection";
import Inspire from "./views/Inspire";
import Sustain from "./views/Sustain";
import Checkout from "./views/Checkout";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        <div>
          <Header />
        </div>
        <div className="my-32">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/collection">
              <Collection />
            </Route>
            <Route path="/item/:id">
              <Item />
            </Route>
            <Route path="/inspire">
              <Inspire />
            </Route>
            <Route path="/sustain">
              <Sustain />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
          </Switch>
        </div>
        <div className="mt-10">
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;

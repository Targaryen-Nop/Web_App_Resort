import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import HomePage from "./pages/HomePage";
import NavbarPage from "./pages/Navbar";
import HistoryPage from "./pages/HistoryPage";



function App() {
  return (
    <>
      <Router>
        <Header />
        <NavbarPage />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/history">
            <HistoryPage />
          </Route>
          </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

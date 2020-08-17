import React from 'react';
import classes from "./App.module.scss";

import Navbar from "./components/navbar/Navbar";
import Home from './components/home/Home';
import Bio from "./components/bio/Bio";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className={classes.app}>
      <Router>
      <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/bio" exact component={Bio} />
          <Route path="/skills" exact component={Skills} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

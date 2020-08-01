import React, { useState } from 'react';
import Navbar from "./components/navbar/Navbar";
import Home from './components/home/Home';
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [location, setLocation] = useState("Home");

  const handleSetLocation = (link) => setLocation(link);

  return (
    <div className="App">
      <Router>
      <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/bio" exact component={Bio} />
          <Route path="/skills" exact component={Skills} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/contact" exact component={Contact} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

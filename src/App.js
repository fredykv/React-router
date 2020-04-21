import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Pagination from "./componets/Pagination";
import Ejercicio1 from "./pages/Ejercicio1";
import Ejercicio2 from "./pages/Ejercicio2";

function App() {
  return (
    <Router>
      <Pagination />
      <Switch>
        <Route path="/2" component={Ejercicio2} />
        <Route path="/" component={Ejercicio1} />
      </Switch>
    </Router>
  );
}

export default App;

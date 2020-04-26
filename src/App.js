import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import Pagination from "./componets/Pagination";
import Ejercicio1 from "./pages/Ejercicio1";
import Ejercicio2 from "./pages/Ejercicio2";
import { useState } from "react";

function App() {

  const [mode1, setmode] = useState({
    mod: "Dark",
    modInv: "Ligth",
    clasName: "btn btn-dark",
    bg: "bg-dark text-white",
    bgInput: "bg-light",
  });

  const changeMode = (mode1) => {
    if (mode1 === "Dark") {
      const light = {
        mod: "Light",
        modInv: "Dark",
        clasName: "btn btn-light",
        bg: "bg-light",
        bgInput: "bg-dark text-white",
      };
      setmode((mode1 = light));
    } else {
      const dark = {
        mod: "Dark",
        modInv: "Ligth",
        clasName: "btn btn-dark",
        bg: "bg-dark text-white",
        bgInput: "bg-light",
      };
      setmode((mode1 = dark));
    }}

  return (
    <Router>
      <Pagination  mode={mode1} changeMode={changeMode} />
      <Switch>
        <Route path="/2" component={Ejercicio2} />
        <Route path="/" component={Ejercicio1} />
      </Switch>
    </Router>
  );
}

export default App;

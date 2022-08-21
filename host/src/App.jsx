import React from "react";
import ReactDOM from "react-dom";
import Counter from 'remote/Counter'
import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: host</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <div>------------</div>
    <Counter />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

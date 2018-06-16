import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

import 'jquery';
import 'bootstrap';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/index.css';
//import '../node_modules/font-awesome/css/font-awesome.css';

ReactDOM.render(<App data="data.json" />, document.getElementById("root"));

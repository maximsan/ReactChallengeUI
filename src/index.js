import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

import "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<App data="data.json" />, document.getElementById("root"));

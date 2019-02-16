import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

import "jquery";
import "bootstrap";

ReactDOM.render(<App data="../data.json" />, document.getElementById("root"));

if (module.hot) module.hot.accept();

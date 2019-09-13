import React from "react";
import ReactDOM from "react-dom";
import Root from "./src/components/Root";

const selector = document.querySelector("#app");

ReactDOM.render(<Root />, selector);

// npm install cross-env -g || yarn add -g cross-env
// yarn dev
import React, { useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../utils/history";

function Root(props) {
  useEffect(() => {
  }, []);
  useEffect(() => {
    console.log("Post is changed", props.post);
  }, [props.post]);
  return (
    <Router history={history}>
    </Router>
  );
}

export default Root;
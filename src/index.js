import React, { Component } from "react";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "components/layouts/index";
import Error404View from "views/error404";

const hist = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <Router history={hist}>
                {loading.length > 0 && <Preloader />}
                <Switch>
                    <Layout component={Layout} />
                    <Route component={Error404View} />
                </Switch>
            </Router>

        )
    }
};

export default App;
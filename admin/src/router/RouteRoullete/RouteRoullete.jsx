import React from "react";
import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import "./style.scss";
import { ROUTES } from "../../shared/constants";
import { Creater } from "../../pages";

export const RouteRoullete = () => {
    return (
        <Router>
            <div className="container">
                <Switch>
                    <Route path={ROUTES.base} exact>
                        <Redirect to={ROUTES.creater} />
                    </Route>
                    <Route path={ROUTES.creater}>
                        <Creater />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
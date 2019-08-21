
import * as React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Reduxform from "../component/Reduxform/ReduxForm.container";
import Formik from "../component/Formik/Formik.container";

export function Routes() {
    return (
        <BrowserRouter>
                  <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <span className="navbar-brand" href="#">Forms</span>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                              <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                          <Link className="nav-link" to="/">Redux Form</Link>
                                    </li>
                                    <li className="nav-item active">
                                          <Link className="nav-link" to="/formik">Formik Form</Link>
                                    </li>
                              </ul>
                        </div>
                  </nav>
                <Switch>
                    <Route path="/formik" component={Formik} />
                    <Route path="/" component={Reduxform} />
                </Switch>
        </BrowserRouter>
    )
}
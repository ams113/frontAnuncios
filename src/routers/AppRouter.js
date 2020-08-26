import React from 'react';
// import { Navbar } from '../components/ui/Navbar';
import { Login } from '../components/login/Login';
// import { Home } from '../components/home/Home';
import { DashboardRoutes } from './DashboardRoutes';

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

export const AppRouter = () => {
    return (
        <Router>
            <div>
               {/*  <Navbar /> */}
                <Switch>
                    <Route exact path="/login" component={ Login }/>
                    <Route path="/" component={ DashboardRoutes }/>
                </Switch>
            </div>
    </Router>
    )
}

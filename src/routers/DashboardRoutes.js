import React from 'react';
import { Switch, Route, Redirect} from "react-router-dom";
import { Home } from '../components/home/Home';
import { Navbar } from '../components/ui/Navbar';
import { AdDetail } from '../components/home/AdDetail';

export const DashboardRoutes = () => {
    return (
       <>
            <Navbar /> 
            <div className="container mt-5">
                <Switch>
                    <Route exact path="/home" component={ Home }/>
                    <Route exact path="/detail/:id" component={ AdDetail }/>
                    
                    <Redirect to="/home" />
                </Switch>
            </div>
       </>
    )
}

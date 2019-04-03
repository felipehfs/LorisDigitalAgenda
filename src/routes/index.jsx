import React from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'
import LoginPage from '../pages/login'
import DashBoardPage from '../pages/dashboard/'

export default props => (
    <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route path="/dashboard" component={DashBoardPage} />
        <Redirect from="*" to="/login" />
    </Switch>
)
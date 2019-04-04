import React from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'
import LoginPage from '../pages/login'
import ArchivedPage from '../pages/archived'
import DashBoardPage from '../pages/dashboard'
import RegisterPage from '../pages/register'

const PrivateRoute =  ({component:Component, ...rest }) => {
    return (
        <Route {...rest} render={
            props => localStorage.getItem('authToken')? (<Component {...props} />): (<Redirect to={{
                pathname: '/login',
                state: { from: props.location}
            }} />) 
        }/>
    )
}

export default props => (
    <Switch>
        <Route exact path="/login" component={LoginPage} />
        <PrivateRoute path="/register" component={RegisterPage} />
        <PrivateRoute path="/dashboard" component={DashBoardPage} />
        <PrivateRoute path="/archived" component={ArchivedPage} />
        <Redirect from="*" to="/login" />
    </Switch>
)
import React from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'
import LoginPage from '../pages/login'
import DashBoardPage from '../pages/dashboard/'

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
        <PrivateRoute path="/dashboard" component={DashBoardPage} />
        <Redirect from="*" to="/login" />
    </Switch>
)
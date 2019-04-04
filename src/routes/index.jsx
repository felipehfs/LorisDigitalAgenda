import React from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'
import LoginPage from '../pages/login'
import ArchivedPage from '../pages/archived'
import DashBoardPage from '../pages/dashboard'
import RegisterPage from '../pages/register'
import NewJournal from '../pages/newJournal'
import EditJournalPage from '../pages/editJournal'

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
        <Route path="/register" component={RegisterPage} />
        <PrivateRoute path="/dashboard" component={DashBoardPage} />
        <PrivateRoute path="/pages/archived" component={ArchivedPage} />
        <PrivateRoute path="/pages/:id/edit" component={EditJournalPage} />
        <PrivateRoute path="/pages/new" component={NewJournal} />
        <Redirect from="*" to="/login" />
    </Switch>
)
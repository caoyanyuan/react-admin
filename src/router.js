import React from 'react'
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom'

import App from './App'
import Login from './pages/login'

export default class ERouter extends React.Component{
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={Login}/>
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}

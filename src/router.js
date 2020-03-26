import React from 'react'
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom'

import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Home from './pages/home';

export default class ERouter extends React.Component{
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/" render={() =>
                            <Admin>
                                <Switch>
                                    <Route path='/home' component={Home} />
                                </Switch>
                            </Admin>
                        } >
                        </Route>

                    </Switch>
                </App>
            </HashRouter>
        )
    }
}

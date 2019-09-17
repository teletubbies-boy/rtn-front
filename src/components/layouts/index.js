import React, { Component } from "react"
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'
import routes from '../../utils/routes'

class Layout extends Component {
    getRoute = (route) => {
        const routePath = route.path
        if (route.isRedirectRoute) {
            return <Redirect key={routePath} exact from={routePath} to={route.to} />
        } 
        return <Route key={routePath} exact path={routePath} component={route.component} />
    }

    getRoutes = () => {
        let routeList = []
        routes.map(route => {
            const subRoutes = route.subRoutes || []
            if (subRoutes.length > 0) {
                subRoutes.map(subRoute => { routeList.push(this.getRoute(subRoute)) })
            } else {
                routeList.push(this.getRoute(route))
            }
        })
        return routeList
    }

    render () {
        return (
            <div id='main-wrapper' className={`${isShowSideBar ? 'show-sidebar' : ''}`}>
            <TopBarHeader isShowSideBar={isShowSideBar} onClickShowSideBar={this.onClickShowSideBar} />

            <Switch>
                {this.getRoutes()}
                <Route component={Error404View} />
            </Switch>
        </div>

        )
    }
}

export default Layout;
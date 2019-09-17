import React from "react"
import { Link, withRouter } from "react-router-dom"

class TopBarHeader extends React.Component {

    render () {

        const {
            isShowSideBar
        } = this.props
        return (
            <header className="topbar" >
                <nav className="navbar top-navbar navbar-expand-md navbar-light">
                    <div className="navbar-header">
                       
                    </div>
                </nav>
            </header>
        )
    }
}

export default withRouter(TopBarHeader)

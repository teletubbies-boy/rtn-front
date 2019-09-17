import React from "react"
import { Link, withRouter } from "react-router-dom"

class Error404View extends React.Component {
    render () {
        return (
            <div className="error-box">
                <div className="error-body text-center">
                    <h1 className="error-title text-danger">404</h1>
                    <h3 className="text-uppercase error-subtitle">PAGE NOT FOUND !</h3>
                    <p className="text-muted m-t-30 m-b-30">YOU SEEM TO BE TRYING TO FIND HIS WAY HOME</p>
                    <Link to="/" className="btn btn-danger btn-rounded waves-effect waves-light m-b-40">Back to home</Link>
                </div>
            </div>
        )
    }
}

export default withRouter(Error404View)

import React, { Component } from 'react';


class ErrorBountry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            haserror: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ haserror: true })
    }

    render() {
            if (this.state.haserror) {
                return <h1>Oops this is an error!!</h1>
            }
            else {
                return this.props.children;
            }
    }
}

export default ErrorBountry;
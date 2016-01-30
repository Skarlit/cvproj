import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux'

class App extends React.Component {
    constructor() {
        super()
    }
    render() {
        console.log(this.props);
       return <div>Hi
            {this.props.children}
       </div>
    }
}

function select(state) {
    return state
}

export default connect(select)(App);

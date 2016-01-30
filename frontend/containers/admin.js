import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Immutable from "immutable"

class Admin extends Component {
    constructor() {
        super()
    }
    render() {
        console.log(this.props);
        return <div>
            <h1>Admin</h1>
            {this.props.children}
        </div>
    }
}

function select(state) {
    var state = state.adminReducer;
    return {
        chars: state.get("chars"),
        charMap: state.get("charMap")
    }
}

export default connect(select)(Admin);

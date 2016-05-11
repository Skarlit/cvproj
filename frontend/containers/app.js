import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux'
import Radium from 'radium';

class App extends React.Component {
    constructor() {
        super()
    }
    render() {
        console.log(this.props);
       return <div>
            <div>
                {this.props.children}
            </div>
       </div>
    }
}

function select(state) {
    return state
}

export default connect(select)(Radium(App));

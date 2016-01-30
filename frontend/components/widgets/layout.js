import React from "react";
import Radium from "radium";

var Row = Radium(React.createClass({
    render: function() {
        return <div style={[styles.row, this.props.style]}>{this.props.children}</div>
    }
}));


var Col = Radium(React.createClass({
    render: function() {
        return <div style={[styles.col, this.props.style]}>{this.props.children}</div>
    }
}));


var styles ={
    row: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "flex-start"
    },
    col: {

    }
}

export {Row, Col};
import React from "react";
import Reflux from "reflux";
import {Color} from "../../constants.js";
import {Link} from 'react-router';
import StaticText from './static_text.js';
import mui from "material-ui";
import ThemeMixin from "../../mixin/global_theme.js";
import StaticTextStore from "../../stores/static_text.js";

var Tab = mui.Tab;
var FlatButton = mui.FlatButton;

var LinkButton = React.createClass({
    mixins: [ThemeMixin, Reflux.connect(StaticTextStore)],
    _handleTabActive: function() {

    },
    render: function() {
        var el = null;
        var label = this.state[this.props.text];
        switch(this.props.kind) {
            case "tab":
                el = <Tab label={label} style={this.props.style} route={this.props.link}
                          onActive={this._handleTabActive} ></Tab>;
                break;
            case "button":
                el = <FlatButton label={label} style={this.props.style}></FlatButton>;
                break;
        }
        return el;
    }
});

export default LinkButton;
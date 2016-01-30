import React from "react";
import Radium from "radium";
import StaticText from './static_text.js';
import mui from "material-ui";
import ThemeMixin from "../../mixin/global_theme.js";
import StaticTextStore from "../../stores/static_text.js";
var Tabs = mui.Tabs;
var Tab = mui.Tab;

var TabGroup = React.createClass({
    mixins: [ThemeMixin, StaticTextStore],
    render: function() {
        var tabs = [];
        for (var i = 0; i <  this.props.tabs.length; i++) {
           tabs.push(<Tab label={this.state[this.props.tabs[i].label]} route={this.props.tabs[i].link}></Tab>)
        }
        return <Tabs>
            {tabs}
        </Tabs>
    }
});

export default Radium(TabGroup);
import React from "react";
import Radium from "radium";
import {Link} from "react-router";
import mui from "material-ui";
import LangBtn from "./lang_btn.js";
import LinkBtn from "./link_button.js";
import {Color} from "../../constants.js";
import TabGroup from "./tab_group.js";

/*
    props: rootMenus<(Dropdown props)Array>
 */

var tabs = [
    {label: "cvdb" , link: "/"},
    {label: "myList", link: "/my_lists"},
    {label: "search", link: "/char"}
]
var Navbar = React.createClass({
    render: function() {
        return <nav style={[styles.base]}>
            <TabGroup tabs={tabs} />
        </nav>
    }
});

var styles = {
    base: {
        backgroundColor: Color.main,
        width: "100%",
        position: "fixed",
        top: "0",
        height: "50px",
        zIndex: "10000"
    }
};



export default Radium(Navbar);


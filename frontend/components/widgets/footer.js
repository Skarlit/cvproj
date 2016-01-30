import React from "react";
import Radium from "radium";
import LangBtn from "./lang_btn.js";
import {Color} from "../../constants.js";

var Footer = React.createClass({
    render: function() {
        return <div style={styles.wrapper}>
           <div style={styles.content}>
               <div style={styles.text}>
                   <p>Character/CV Database ver 0.0.1</p>
                   <p> powered by Reflux x React, Material-UI</p>
               </div>
               <LangBtn />
           </div>
        </div>
    }
});


var styles = {
    wrapper: {
        position: "relative",
        width: "100%",
        minHeight: "150px",
        fontSize: "10px",
        color: Color.gray
    },
    content: {
        borderTop: `1px solid ${Color.gray}`,
        padding: "20px",
        width: '50%',
        margin: '0 auto'
    },
    text: {
        textAlign: "center"
    }
};

export default Footer;

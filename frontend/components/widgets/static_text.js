import React from "react";
import Reflux from "reflux";
import Radium from "radium";
import {Color} from "../../constants.js";
import ReactMixin from "react-mixin";
import StaticTextStore from "../../stores/static_text.js";

var StaticText = React.createClass({
   mixins: [Reflux.connect(StaticTextStore)],
   render: function() {
      return <span className="text">{this.state[this.props.text]}</span>
   }
});


//var styles = {
//   base: {
//      fontSize: "inherit",
//      textDecoration: "inherit",
//      color: "inherit",
//      fontWeight: "inherit"
//   }
//};

export default Radium(StaticText);
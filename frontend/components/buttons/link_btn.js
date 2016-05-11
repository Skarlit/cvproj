import React from "react";
import Radium from "radium";
import { Link } from "react-router";

class LinkBtn extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <Link to={this.props.href}>
       <span>{this.props.text}</span>
     </Link>
  }
}

LinkBtn.propTypes = {
  href: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired
}

var styles = {
  wrapper: {

  },
  text: {

  }
}

export default Radium(LinkBtn);

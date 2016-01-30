import React from 'react';
import {Link} from 'react-router';
import StaticText from './static_text.js';
/*  props: text<string>, link<string>, class<string>
*/

var DropdownItem = React.createClass({
    render: function() {
        var linkTag =  this.props.link ? <Link to={ this.props.link }><StaticText text={ this.props.text }/></Link> : <span><StaticText text={ this.props.text }/></span>;
        return <div key="item" className={"item " + (this.props.class || "")}>{linkTag}</div>
    }
});

/* props:  text<string>, class<string>,  menuItems<(obj)Array>
 */
var Dropdown = React.createClass({
    getInitialState: function() {
      return {hovered: false};
    },
    renderEntries: function(menuItems) {
        var items = new Array(menuItems.length);
        for (var i = 0; i < menuItems.length; i++) {
            items[i] = <DropdownItem {...menuItems[i]} />
        }
        return items;
    },
    expand: function() { this.setState({hovered: true})},
    collapse: function() { this.setState({hovered: false})},
    render: function() {
        var header = this.props.link ? <Link to={this.props.link} className="header"> <StaticText text={ this.props.text }/></Link> :
            <div className="header"> <StaticText text={ this.props.text }/></div>;
        return <div className={"dropdown " + (this.state.hovered ? "hover" : "")} onMouseEnter={this.expand} onMouseLeave={this.collapse}>
            {header}
            <div className="items">{ this.state.hovered ? this.renderEntries(this.props.menuItems) : null }</div>
        </div>
    }
});

export default Dropdown;
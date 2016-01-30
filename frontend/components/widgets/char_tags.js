import React from 'react';
import {Type, TAG} from "../../constants";
import {Link} from 'react-router';
import Radium from "radium";
import AppState from "../../stores/app_state.js";
import Reflux from "reflux";
import CharStore from "../../stores/char_store";


var CharTagsView = React.createClass({
    mixins: [Reflux.listenTo(CharStore, "onTagChanged")],
    getInitialState: function() {
      return {tags: []}
    },
    onTagChanged: function(data) {
        this.setState({
            tags: data['appearance']
        });
    },
    render: function() {
        var tags = [];
        for(var t in this.state.tags) {
            tags.push(<Tag tag={t}  />)
        }
        return <div>
            {tags}
        </div>
    }
});

var Tag = Radium(React.createClass({
    propTypes: {
       tag: TAG.isRequired
    },
    render: function() {
        return <Link to={"search/?tag=" + this.props.tag.tag_id}>
            {this.props.tag.tag_name}
        </Link>
    }
}));

export default CharTagsView;
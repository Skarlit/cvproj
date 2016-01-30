import React from 'react';
import { connect } from 'react-redux'

var Index = React.createClass({
   render: function() {
       console.log(this.props);
       return <h1>Home </h1>
   }
});

function select(state) {
  return state;
}

export default connect(select)(Index);
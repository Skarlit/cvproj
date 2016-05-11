import React from "react";
import LinkBtn from "../components/buttons/link_btn";

export default class Search extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div>Search
      <LinkBtn href="/result" text="Search"/>
    </div>
  }
}

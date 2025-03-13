import React from "react";
import { data } from "../bin/data";
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";

export default class Portfolio extends React.Component {
  constructor() {
    super();
    this.filters = ["All", "Websites", "Flayers", "Business Cards"];
    this.state = {
      filter: "All",
    };
    this.data = data;
  }

  render() {
    return (
      <div className="container">
        <Toolbar
          filters={this.filters}
          selected={this.state.filter}
          onSelectFilter={(filter) => {
            this.setState({ filter: filter });
          }}
        />
        <ProjectList selected={this.state.filter} />
      </div>
    );
  }
}

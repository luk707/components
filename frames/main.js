import { Component } from "react";
import { SidebarLayout } from "../components";
import "./_preload";

class Frame extends Component {
  render() {
    return <SidebarLayout>{this.props.children}</SidebarLayout>;
  }
}

export default Frame;

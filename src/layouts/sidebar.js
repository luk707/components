import React, { Component, Fragment } from "react";

import { Sidebar, Main } from "../index";

class SidebarLayout extends Component {
  render() {
    return (
      <Fragment>
        <Sidebar>{this.props.sidebar}</Sidebar>
        <Main>{this.props.children}</Main>
      </Fragment>
    );
  }
}

export default SidebarLayout;

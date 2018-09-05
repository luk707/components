import { Component } from "react";
import { RouterListLink } from "./router-link";
import { SidebarLayout, List, ListSection } from "../src";

class Layout extends Component {
  render() {
    return (
      <SidebarLayout
        sidebar={
          <List>
            <ListSection>Introduction</ListSection>
            <RouterListLink path="/">Getting started</RouterListLink>
            <ListSection>Theming</ListSection>
            <RouterListLink path="/theming/setup">setup</RouterListLink>
            <RouterListLink path="/theming/colors">colors</RouterListLink>
            <ListSection>Components</ListSection>
            <RouterListLink path="/components/button">Button</RouterListLink>
          </List>
        }
      >
        {this.props.children}
      </SidebarLayout>
    );
  }
}

export default Layout;

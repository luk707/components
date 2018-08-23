import { Component } from "react";
import {
  SidebarLayout,
  ThemeProvider,
  ListLink,
  ListSection,
  List
} from "../components";
import { withRouter } from "next/router";
import "./_preload";

const RouterLink = withRouter(({ path, children, router }) => (
  <ListLink
    href={path}
    active={router.pathname === path}
    onClick={e => {
      e.preventDefault();
      router.push(path);
    }}
  >
    {children}
  </ListLink>
));

class Frame extends Component {
  render() {
    return (
      <ThemeProvider>
        <SidebarLayout
          sidebar={
            <List>
              <ListSection>Introduction</ListSection>
              <RouterLink path="/">Getting started</RouterLink>
              <ListSection>Components</ListSection>
              <RouterLink path="/components/button">Button</RouterLink>
            </List>
          }
        >
          {this.props.children}
        </SidebarLayout>
      </ThemeProvider>
    );
  }
}

export default Frame;

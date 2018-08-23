import { Component, Fragment } from "react";
import {
  SidebarLayout,
  ThemeProvider,
  ListLink,
  ListSection,
  List
} from "../components";
import { withRouter } from "next/router";
import "./_preload";

import { MDXProvider } from "@mdx-js/tag";

import SyntaxHighlighter from "react-syntax-highlighter";
import { rainbow } from "react-syntax-highlighter/styles/hljs";

const RouterLink = withRouter(({ path, children, router }) => (
  <ListLink
    href={path}
    active={router.pathname === path}
    onClick={e => {
      e.preventDefault();
      router.push(
        path,
        process.env.NODE_ENV === "production" ? `/components${path}` : path
      );
    }}
  >
    {children}
  </ListLink>
));

class Frame extends Component {
  render() {
    return (
      <ThemeProvider>
        <MDXProvider
          components={{
            pre: Fragment,
            code: ({ className, children }) => (
              <SyntaxHighlighter
                language={className.replace("languauge-", "")}
                showLineNumbers
                lineNumberStyle={{ opacity: "0.4", userSelect: "none" }}
                style={rainbow}
              >
                {children}
              </SyntaxHighlighter>
            )
          }}
        >
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
        </MDXProvider>
      </ThemeProvider>
    );
  }
}

export default Frame;

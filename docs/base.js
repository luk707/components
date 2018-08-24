import "./global-styles";

import { Component } from "react";
import { ThemeProvider } from "emotion-theming";
import MDXProvider from "./mdx-provider";
import createTheme from "../src/theme/create-theme";

export default View =>
  class Base extends Component {
    render() {
      return (
        <ThemeProvider theme={createTheme()}>
          <MDXProvider>
            <View />
          </MDXProvider>
        </ThemeProvider>
      );
    }
  };

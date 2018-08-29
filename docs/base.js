import "./global-styles";

import { Component } from "react";
import { ThemeProvider } from "emotion-theming";
import MDXProvider from "./mdx-provider";
import createTheme from "../src/theme/create-theme";

const theme = createTheme();

console.log(theme);

export default View =>
  class Base extends Component {
    render() {
      return (
        <ThemeProvider theme={theme}>
          <MDXProvider theme={theme}>
            <View />
          </MDXProvider>
        </ThemeProvider>
      );
    }
  };

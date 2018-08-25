import React from "react";
import { ThemeProvider } from "emotion-theming";
import renderer from "react-test-renderer";

import createTheme from "../theme/create-theme";
import Terminal from "../terminal";

const theme = createTheme();

describe("Terminal", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Terminal>Hello World</Terminal>
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

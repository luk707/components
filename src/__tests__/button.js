import React from "react";
import { ThemeProvider } from "emotion-theming";
import renderer from "react-test-renderer";

import createTheme from "../theme/create-theme";
import Button from "../button";

const theme = createTheme();

describe("Button", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Button>Hello World</Button>
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

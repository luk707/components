import React from "react";
import Button from "../button";
import ThemeProvider from "../theme-provider";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <ThemeProvider>
        <Button>Hello World</Button>
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

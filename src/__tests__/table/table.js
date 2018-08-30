import React from "react";
import { ThemeProvider } from "emotion-theming";
import renderer from "react-test-renderer";

import createTheme from "../../theme/create-theme";
import { Table, THead, Th, Td, Tr } from "../../table";

const theme = createTheme();

describe("Table", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Table>
            <THead>
              <Tr>
                <Th>Firstname</Th>
                <Th>Lastname</Th>
                <Th>Age</Th>
                <Th>Gender</Th>
              </Tr>
            </THead>
            <tbody>
              <Tr>
                <Td>John</Td>
                <Td>Doe</Td>
                <Td>30</Td>
                <Td>Male</Td>
              </Tr>
              <Tr>
                <Td>Jane</Td>
                <Td>Doe</Td>
                <Td>29</Td>
                <Td>Female</Td>
              </Tr>
            </tbody>
          </Table>
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

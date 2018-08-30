import React from "react";
import styled from "react-emotion";

const TableElement = styled("table")({
  tableLayout: "fixed",
  borderCollapse: "collapse"
});

const TableWrapper = styled("div")(({ theme }) => ({
  overflowX: "auto",
  backgroundColor: theme.color_offWhite
}));

export default props => (
  <TableWrapper>
    <TableElement {...props} />
  </TableWrapper>
);

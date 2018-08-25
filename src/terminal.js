import React, { Component } from "react";
import styled from "react-emotion";
import WindowActions from "./window-actions";

class Terminal extends Component {
  render() {
    const { children, ...rest } = this.props;
    return (
      <div {...rest}>
        <WindowActions />
        <pre>{children}</pre>
      </div>
    );
  }
}

export default styled(Terminal)(({ theme }) => ({
  backgroundColor: theme.color_black,
  padding: "5px 10px",
  borderRadius: 3,
  "> pre": { color: theme.color_white }
}));

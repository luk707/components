import React, { Component } from "react";
import { withTheme } from "emotion-theming";
import styled from "react-emotion";
import { readableColor } from "polished";

const gutter = 3;
const size = 180;

const Wrapper = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  margin: -gutter
});

const Swatch = styled("div")(({ theme, color: backgroundColor }) => ({
  display: "flex",
  fontFamily: theme.typography_fontStack_mono,
  width: size,
  height: size,
  backgroundColor,
  color: readableColor(backgroundColor),
  alignItems: "center",
  justifyContent: "center",
  margin: gutter
}));

class ColorGrid extends Component {
  render() {
    const colors = Object.keys(this.props.theme)
      .filter(key => /^color_/.test(key))
      .reduce((acc, key) => {
        const [_, ...rest] = key.split("_");
        const color = rest.join("_");
        return { ...acc, [color]: this.props.theme[key] };
      }, {});
    return (
      <Wrapper>
        {Object.keys(colors).map(color => (
          <Swatch key={color} color={colors[color]}>
            {color}
          </Swatch>
        ))}
      </Wrapper>
    );
  }
}

export default withTheme(ColorGrid);

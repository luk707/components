import styled from "react-emotion";

export default styled("a")(({ theme, active }) => ({
  textDecoration: "none",
  color: theme.colorDark,
  paddingLeft: active ? 10 : 14,
  marginTop: 10,
  display: "block",
  height: 25,
  display: "flex",
  alignItems: "center",
  borderLeft: active && `4px solid ${theme.colorPrimary}`,
  flexShrink: 0
}));

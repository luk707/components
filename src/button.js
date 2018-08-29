import styled from "react-emotion";
import { darken, lighten } from "polished";

export const buttonStyled = Component =>
  styled(Component)(
    ({ theme }) => ({
      fontSize: 12,
      color: theme.colorDark,
      padding: `8px 20px`,
      borderRadius: 3,
      boxShadow: `0 0 0 ${theme.color_shadow}`,
      transition: "ease-out 0.05s",
      textDecoration: "none",
      cursor: "pointer",
      ":hover": {
        boxShadow: `0 2px 4px ${theme.color_shadow}`
      }
    }),
    ({ prominence = "default", theme }) => {
      switch (prominence) {
        case "primary":
          return {
            color: theme.color_white,
            backgroundColor: theme.color_primary,
            border: `1px solid ${theme.color_primaryDark}`,
            ":hover": {
              backgroundColor: theme.color_primaryLight
            }
          };
        default:
          return {
            color: theme.color_black,
            backgroundColor: theme.color_white,
            border: `1px solid ${theme.color_greyVeryLight}`
          };
      }
    }
  );

export default buttonStyled("button");

export const LinkButton = buttonStyled("a");

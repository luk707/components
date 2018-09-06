import styled from "react-emotion";
import { darken, lighten } from "polished";

export const buttonStyled = Component =>
  styled(Component)(
    ({ theme }) => ({
      fontSize: theme.button_fontSize,
      color: theme.button_color,
      paddingTop: theme.button_paddingTop,
      paddingBottom: theme.button_paddingBottom,
      paddingLeft: theme.button_paddingLeft,
      paddingRight: theme.button_paddingRight,
      borderRadius: theme.button_borderRadius,
      boxShadow: theme.button_shadow,
      transition: theme.button_transition,
      textDecoration: theme.button_textDecoration,
      cursor: theme.button_cursor,
      borderStyle: theme.button_borderStyle,
      borderWidth: theme.button_borderWidth,
      ":hover": {
        boxShadow: theme.button_hover_shadow
      }
    }),
    ({ prominence = "default", theme }) => {
      switch (prominence) {
        case "primary":
          return {
            color: theme.button_primaryColor,
            borderColor: theme.button_primaryBorderColor,
            backgroundColor: theme.button_primaryBackgroundColor,
            ":hover": {
              backgroundColor: theme.button_hoverPrimaryBackgroundColor
            }
          };
        default:
          return {
            color: theme.button_defaultColor,
            borderColor: theme.button_defaultBorderColor,
            backgroundColor: theme.button_defaultBackgroundColor,
            ":hover": {
              backgroundColor: theme.button_hoverDefaultBackgroundColor
            }
          };
      }
    }
  );

export default buttonStyled("button");

export const LinkButton = buttonStyled("a");

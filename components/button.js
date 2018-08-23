import styled from "react-emotion";
import { darken, lighten } from "polished";

export const buttonStyled = Component =>
  styled(Component)(
    ({ theme }) => ({
      color: theme.colorDark,
      padding: `8px 20px`,
      borderRadius: 3,
      boxShadow: `0 0 0 ${theme.colorShadow}`,
      transition: "ease-out 0.05s",
      textDecoration: "none",
      cursor: "pointer",
      ":hover": {
        boxShadow: `0 2px 4px ${theme.colorShadow}`
      }
    }),
    ({ prominence = "default", theme }) => {
      switch (prominence) {
        case "primary":
          return {
            color: theme.colorWhite,
            backgroundColor: theme.colorPrimary,
            border: `1px solid ${darken(0.1, theme.colorPrimary)}`,
            ":hover": {
              backgroundColor: lighten(0.02, theme.colorPrimary)
            }
          };
        default:
          return {
            color: theme.colorBlack,
            backgroundColor: theme.colorWhite,
            border: `1px solid ${theme.colorGrey}`
          };
      }
    }
  );

export default buttonStyled("button");

export const LinkButton = buttonStyled("a");

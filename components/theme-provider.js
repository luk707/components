import { ThemeProvider } from "emotion-theming";
import { createTheme } from "../theme";

export default ({ children, ...theme }) => (
  <ThemeProvider theme={createTheme(theme)}>{children}</ThemeProvider>
);

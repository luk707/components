import { ThemeProvider } from "emotion-theming";

export default ({ children, ...theme }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

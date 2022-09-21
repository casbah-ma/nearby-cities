import { ThemeProvider } from "styled-components";
import defaultTheme from "../../theme";

const UIProvider = ({ theme, children }) => {
  const combinedTheme = { ...defaultTheme, ...theme };
  return <ThemeProvider theme={combinedTheme}>{children}</ThemeProvider>;
};

export default UIProvider;

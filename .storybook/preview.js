import GlobalStyles from "../src/styles/GlobalStyles";
import "../src/styles/globals.css";
import UIProvider from "../src/context/Provider";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <UIProvider>
      <GlobalStyles />
      <Story />
    </UIProvider>
  ),
];

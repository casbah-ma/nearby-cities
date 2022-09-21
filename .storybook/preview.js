import GlobalStyles from "../src/styles/GlobalStyles";
import * as NextImage from "next/image";
import "../src/styles/globals.css";
import UIProvider from "../src/context/Provider";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

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

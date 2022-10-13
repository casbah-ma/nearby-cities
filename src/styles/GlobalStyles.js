import { createGlobalStyle } from "styled-components";
import { GlobalStyles as BaseStyles } from "twin.macro";
import "./globals.css";

const CustomStyles = createGlobalStyle``;
const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);
export default GlobalStyles;

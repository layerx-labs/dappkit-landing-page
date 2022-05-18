import { rem } from "polished";

export const colors = {
  dark: "#000000",
  light: "#ffffff",
  grey: "#E7E7E7",
  grey100: "#E5E5E5",
  grey200: "#cbcbcb",
  grey600: "#646464",
  grey700: "#4B4B4B",
  grey800: "#404040",
  grey900: "#202020",
  green: "#D2FF62",
  green500: "#BAFF62",
  green900: "#253314",
  purple200: "#C9C0FF",
  purple500: "#7761FF",
};

export const typography = {
  regular: 400,
  medium: 500,
  bold: 700,
};

export const sizes = {
  defaultSize: "18px",
  border: "2px",
  shaddow: "6px",
};

export const device = {
  xs: `(min-width: 360px)`,
  s: `(min-width: 700px)`,
  m: `(min-width: 900px)`,
  l: `(min-width: 1280px)`,
  xl: `(min-width: 1600px)`,
  touch: `(hover: none) and (pointer: coarse)`,
  mouse: "(min-width: 538px) and (min-height: 720px)",
};

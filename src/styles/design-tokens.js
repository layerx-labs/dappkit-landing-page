import { typography, colors } from "./variables";

const { fontDefault, fontMono, fontComic } = typography;

const {
  dark,
  purple100,
  purple500,
  green500,
  green900,
  orange,
  brown,
  blue,
  lightBlue,
} = colors;

export const main = {
  defaultFont: fontDefault,
  defaultHeadingFont: fontMono,
  menuFont: fontDefault,
  buttonFont: fontMono,
  bannerFont: fontMono,
  heroFont: fontMono,
  exampleSectionBg: green500,
  exampleTabButtonFont: fontMono,
  exampleTabSubtitleFont: fontMono,
  editorButtonFont: fontMono,
  editorButtonBgActive: purple500,
  sectionSubtitleFont: fontMono,
  cardTextHighlightFont: fontMono,
  cardTextHighlightColor: green500,
  cardTextHighlightBg: green900,
  cardCtaTitleHighlightColor: dark,
  cardCtaTitleHighlightBg: purple100,
  cardCtaTextHighlightColor: purple500,
  pricingFont: fontMono,
  footerSupportSubtitle: fontMono,
  footerMenuFont: fontMono,
};

export const comic = {
  defaultFont: fontComic,
  defaultHeadingFont: fontComic,
  menuFont: fontComic,
  buttonFont: fontComic,
  bannerFont: fontComic,
  heroFont: fontComic,
  exampleSectionBg: orange,
  exampleTabButtonFont: fontComic,
  exampleTabSubtitleFont: fontComic,
  editorButtonFont: fontComic,
  editorButtonBgActive: blue,
  sectionSubtitleFont: fontComic,
  cardTextHighlightFont: fontComic,
  cardTextHighlightColor: orange,
  cardTextHighlightBg: brown,
  cardCtaTitleHighlightColor: blue,
  cardCtaTitleHighlightBg: lightBlue,
  cardCtaTextHighlightColor: blue,
  pricingFont: fontComic,
  footerSupportSubtitle: fontComic,
  footerMenuFont: fontComic,
};

import { getColor } from "./color";

export const getFontStack = (theme, stack) =>
  theme[`typography_fontStack_${stack}`];

export const getTextColor = (theme, text) => theme[`typography_color_${text}`];

export default ({
  brandFontStack = "'Rubik', Arial, sans-serif",
  sansFontStack = "Arial, Helvetica, sans-serif",
  altFontStack = "'Rubik', Arial, sans-serif",
  serifFontStack = "'Georgia', serif",
  monoFontStack = "'Lucida Console', Monaco, monospace",
  baseTextColor = "black",
  inverseTextColor = "white",
  linkTextColor = "primaryDark",
  subtleTextColor = "greyDark"
} = {}) => theme => ({
  typography_fontStack_brand: brandFontStack,
  typography_fontStack_sans: sansFontStack,
  typography_fontStack_alt: altFontStack,
  typography_fontStack_serif: serifFontStack,
  typography_fontStack_mono: monoFontStack,
  typography_color_base: getColor(baseTextColor)(theme) || baseTextColor,
  typography_color_inverse:
    getColor(inverseTextColor)(theme) || inverseTextColor,
  typography_color_link: getColor(linkTextColor)(theme) || linkTextColor,
  typography_color_subtle: getColor(subtleTextColor)(theme) || subtleTextColor
});

import mapKeys from "lodash/mapKeys";
import mapValues from "lodash/mapValues";
import hsl from "polished/lib/color/hsl";
import transparentize from "polished/lib/color/transparentize";

const clamp = v => {
  if (v > 1) {
    return 1;
  }
  if (v < 0) {
    return 0;
  }
  return v;
};

export default ({
  // Base color hues
  primaryHue = 263,
  secondaryHue = 107,

  // Contextual hue
  successHue = 0,
  warnHue = 0,
  infoHue = 0,
  dangerHue = 0,

  saturation = 0.14,
  lightness = 0.62,

  // How far do dark and light colors deviate
  // from the base saturation and lightness
  saturationDeviance = 0.04,
  lightnessDeviance = 0.05,

  // Hue and saturation for non perfect whites
  whiteHue = 23,
  whiteSaturation = 0.09,

  // Monochrome lightness
  whiteLightness = 0.99,
  offWhiteLightness = 0.96,
  greyLightness = 0.8,
  blackLightness = 0.14,
  shadowLightness = 0.14,

  // Define overrides for colors that aren't quite right
  overrides = {}
} = {}) => () => {
  const hues = {
    primary: primaryHue,
    secondary: secondaryHue,
    success: successHue,
    warn: warnHue,
    info: infoHue,
    danger: dangerHue
  };

  const colors = mapValues(hues, hue => ({
    VeryDark: hsl(
      hue,
      clamp(saturation + -2 * saturationDeviance),
      clamp(lightness + -2 * lightnessDeviance)
    ),
    Dark: hsl(
      hue,
      clamp(saturation - saturationDeviance),
      clamp(lightness - lightnessDeviance)
    ),
    "": hsl(hue, saturation, lightness),
    Light: hsl(
      hue,
      clamp(saturation + saturationDeviance),
      clamp(lightness + lightnessDeviance)
    ),
    VeryLight: hsl(
      hue,
      clamp(saturation + 2 * saturationDeviance),
      clamp(lightness + 2 * lightnessDeviance)
    )
  }));

  return {
    // Unpack and spread the colors with their variations
    ...Object.keys(colors).reduce(
      (acc, color) => ({
        ...acc,
        ...Object.keys(colors[color]).reduce(
          (acc, variant) => ({
            ...acc,
            [`color_${color}${variant}`]: colors[color][variant]
          }),
          {}
        )
      }),
      {}
    ),

    // White colors
    color_white: hsl(whiteHue, whiteSaturation, whiteLightness),
    color_offWhite: hsl(whiteHue, whiteSaturation, offWhiteLightness),

    // Grey colors
    color_greyVeryDark: hsl(
      whiteHue,
      clamp(whiteSaturation + -2 * saturationDeviance),
      clamp(greyLightness + -2 * lightnessDeviance)
    ),
    color_greyDark: hsl(
      whiteHue,
      clamp(whiteSaturation - saturationDeviance),
      clamp(greyLightness - lightnessDeviance)
    ),
    color_grey: hsl(whiteHue, whiteSaturation, greyLightness),
    color_greyLight: hsl(
      whiteHue,
      clamp(whiteSaturation + saturationDeviance),
      clamp(greyLightness + lightnessDeviance)
    ),
    color_greyVeryLight: hsl(
      whiteHue,
      clamp(whiteSaturation + 2 * saturationDeviance),
      clamp(greyLightness + 2 * lightnessDeviance)
    ),

    // Black and shadow colors
    color_black: hsl(whiteHue, whiteSaturation, blackLightness),
    color_shadow: transparentize(
      0.9,
      hsl(whiteHue, whiteSaturation, shadowLightness)
    ),

    // Spread in color overrides
    ...mapKeys(overrides, (_, key) => `color_${key}`)
  };
};

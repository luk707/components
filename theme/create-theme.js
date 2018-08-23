import { hsl, transparentize } from "polished";

export default ({
  primaryHue = 263,
  secondaryHue = 107,
  dullHue = 23,
  defaultSaturation = 0.14,
  defaultLightness = 0.62,
  lightSaturation = 0.16,
  lightLightness = 0.88
} = {}) => ({
  colorPrimary: hsl(primaryHue, defaultSaturation, defaultLightness),
  colorPrimaryLight: hsl(primaryHue, lightSaturation, lightLightness),
  colorSecondary: hsl(secondaryHue, defaultSaturation, defaultLightness),
  colorSecondaryLight: hsl(secondaryHue, lightSaturation, lightLightness),
  colorDull: hsl(dullHue, defaultSaturation, defaultLightness),
  colorDullLight: hsl(dullHue, lightSaturation, lightLightness),
  colorWhite: hsl(dullHue, 0.09, 0.99),
  colorOffWhite: hsl(dullHue, 0.09, 0.96),
  colorDark: hsl(dullHue, 0.09, 0.14),
  colorGrey: hsl(dullHue, defaultSaturation, lightLightness),
  colorShadow: transparentize(0.9, hsl(dullHue, 0.09, 0.14))
});

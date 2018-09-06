import mapKeys from "lodash/mapKeys";
import { getColor } from './color'

export default ({
    // Padding
    paddingTop = 8,
    paddingBottom = 8,
    paddingLeft = 20,
    paddingRight = 20,
    // Shadow
    boxShadowHorizontalOffset = 0,
    boxShadowVerticalOffset = 0,
    boxShadowBlur = 0,
    boxShadowColor = 'shadow',
    hoverBoxShadowHorizontalOffset = 0,
    hoverBoxShadowVerticalOffset = 2,
    hoverBoxShadowBlur = 4,
    hoverBoxShadowColor = 'shadow',
    // Border
    borderRadius,
    borderWidth = 1,
    borderStyle = 'solid',
    defaultBorderColor = 'greyVeryLight',
    primaryBorderColor = 'primaryDark',
    // Background
    defaultBackgroundColor = 'white',
    hoverDefaultBackgroundColor = 'white',
    primaryBackgroundColor = 'primary',
    hoverPrimaryBackgroundColor = 'primaryLight',
    // Transition
    transition = 'ease-out 0.05s',
    // Text styles
    fontSize = 12,
    textDecoration = 'none',
    defaultColor = 'black',
    primaryColor = 'white',
    // Cursor
    cursor = 'pointer',
    // Overrides
    overrides = {}
} = {}) => theme => ({
    // Padding
    button_paddingTop: paddingTop,
    button_paddingBottom: paddingBottom,
    button_paddingLeft: paddingLeft,
    button_paddingRight: paddingRight,
    // Shadow
    button_shadow: `${boxShadowHorizontalOffset}px ${boxShadowVerticalOffset}px ${boxShadowBlur}px ${getColor(boxShadowColor)(theme) || boxShadowColor}`,
    button_hover_shadow: `${hoverBoxShadowHorizontalOffset}px ${hoverBoxShadowVerticalOffset}px ${hoverBoxShadowBlur}px ${getColor(hoverBoxShadowColor)(theme) || hoverBoxShadowColor}`,
    // Border
    button_borderRadius: borderRadius || theme.base_borderRadius,
    button_borderWidth: borderWidth,
    button_borderStyle: borderStyle,
    button_defaultBorderColor: getColor(defaultBorderColor)(theme) || defaultBorderColor,
    button_primaryBorderColor: getColor(primaryBorderColor)(theme) || primaryBorderColor,
    // Background
    button_defaultBackgroundColor: getColor(defaultBackgroundColor)(theme) || defaultBackgroundColor,
    button_hoverDefaultBackgroundColor: getColor(hoverDefaultBackgroundColor)(theme) || hoverDefaultBackgroundColor,
    button_primaryBackgroundColor: getColor(primaryBackgroundColor)(theme) || primaryBackgroundColor,
    button_hoverPrimaryBackgroundColor: getColor(hoverPrimaryBackgroundColor)(theme) || hoverPrimaryBackgroundColor,
    // Transition
    button_transition: transition,
    // Text styles
    button_fontSize: fontSize,
    button_textDecoration: textDecoration,
    button_defaultColor: getColor(defaultColor)(theme) || defaultColor,
    button_primaryColor: getColor(primaryColor)(theme) || primaryColor,
    // Cursor
    button_cursor: cursor,
    // Overrides
    ...mapKeys(overrides, (_, key) => `button_${key}`)
})
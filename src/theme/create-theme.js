import omit from "lodash/omit";
import baseTheme from "./base";
import color from "./color";
import typography from "./typography";
import button from "./button";

export default ({
  base = baseTheme,
  extensionOrder = ["color", "typography", "button"],
  extensions = { color, typography, button },
  config = {}
} = {}) =>
  [
    // Run ordered extensions first
    ...extensionOrder.map(ext => extensions[ext](config[ext])),
    // Run all other extensions
    ...Object.keys(omit(extensions, extensionOrder)).map(ext =>
      extensions[ext](config[ext])
    )
  ].reduce((acc, theme) => ({ ...acc, ...theme(acc) }), base(config.base));

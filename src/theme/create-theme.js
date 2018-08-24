import omit from "lodash/omit";
import baseTheme from "./base";
import color from "./color";

export default ({
  base = baseTheme,
  extensionOrder = ["color"],
  extensions = { color },
  config = {}
} = {}) =>
  [
    // Run ordered extensions first
    ...extensionOrder.map(ext => extensions[ext](config[ext])),
    // Run all other extensions
    ...Object.keys(omit(extensions, extensionOrder)).map(ext =>
      extensions[ext](config[ext])
    )
  ].reduce((acc, theme) => theme(acc), base(config.base));

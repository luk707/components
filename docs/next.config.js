const withMDX = require("@zeit/next-mdx")({
  extension: /.mdx?$/
});

module.exports = withMDX({
  dir: "./docs",
  assetPrefix: process.env.NODE_ENV === "production" ? "/components" : "",
  pageExtensions: ["js", "jsx", "md", "mdx"]
});

import { Fragment } from "react";

import { MDXProvider } from "@mdx-js/tag";
import SyntaxHighlighter from "react-syntax-highlighter";
import syntaxHighlighterStyle from "react-syntax-highlighter/styles/hljs/rainbow";

export default ({ children }) => (
  <MDXProvider
    components={{
      pre: Fragment,
      code: ({ className, children }) => (
        <SyntaxHighlighter
          language={className.replace("language-", "")}
          showLineNumbers
          lineNumberStyle={{ opacity: "0.4", userSelect: "none" }}
          style={syntaxHighlighterStyle}
        >
          {children}
        </SyntaxHighlighter>
      )
    }}
  >
    {children}
  </MDXProvider>
);

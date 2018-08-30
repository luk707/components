import { Fragment } from "react";

import { MDXProvider } from "@mdx-js/tag";
import SyntaxHighlighter from "react-syntax-highlighter";

import { Terminal } from "../src";
import highlightTheme from "../src/hljs";

import { Table, Th, Td, Tr, THead } from "../src/table";

export default ({ theme, children }) => (
  <MDXProvider
    components={{
      table: Table,
      th: Th,
      td: Td,
      tr: Tr,
      thead: THead,

      pre: Fragment,

      code: ({ className, children }) =>
        className ? (
          <SyntaxHighlighter
            language={className.replace("language-", "")}
            showLineNumbers
            lineNumberStyle={{
              opacity: "0.4",
              // userSelect: "none",
              marginBottom: 1.2,
              display: "block"
            }}
            style={highlightTheme(theme)}
          >
            {children}
          </SyntaxHighlighter>
        ) : (
          <Terminal>{children}</Terminal>
        )
    }}
  >
    {children}
  </MDXProvider>
);

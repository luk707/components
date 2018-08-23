import { hydrate, injectGlobal } from "react-emotion";

if (typeof window !== "undefined") {
  hydrate(window.__NEXT_DATA__.ids);
}

injectGlobal`
  body { margin: 0 }
  pre *, code { font-family: monospace; font-size: 16px; }
`;

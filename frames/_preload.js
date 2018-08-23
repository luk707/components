import { hydrate, injectGlobal } from "react-emotion";

if (typeof window !== "undefined") {
  hydrate(window.__NEXT_DATA__.ids);
}

injectGlobal`
  body { margin: 0 }
`;

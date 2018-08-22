import { hydrate } from "react-emotion";

if (typeof window !== "undefined") {
  hydrate(window.__NEXT_DATA__.ids);
}

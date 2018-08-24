import { withRouter } from "next/router";
import { ListLink } from "../src";

export const RouterListLink = withRouter(({ path, children, router }) => (
  <ListLink
    href={path}
    active={router.pathname === path}
    onClick={e => {
      e.preventDefault();
      router.push(
        path,
        process.env.NODE_ENV === "production" ? `/components${path}` : path
      );
    }}
  >
    {children}
  </ListLink>
));

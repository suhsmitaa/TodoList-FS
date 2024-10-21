import { create } from "../pages/example/create.example.ts";
import homeIndex from "../pages/home/home.index.ts";
import { login } from "../pages/login/login.example.ts";

type RouteParams = {
  path: any;
  linkLabel?: string;
  content: any;
  isAuthenticated?: boolean;
};

const routes: RouteParams[] = [
  {
    path: "/",
    linkLabel: "Home",
    content: homeIndex,
  },
  {
    path: "/login",
    linkLabel: "Login",
    content: login,
  },
  {
    path: "/example",
    linkLabel: "Example",
    content: create,
    isAuthenticated: true
  },
];

export default routes;

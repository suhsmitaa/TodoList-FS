import { create } from "../pages/example/create.example.ts";
import homeIndex from "../pages/home/home.index.ts";
import { login } from "../pages/user/login.example.ts";
import { register } from "../pages/user/register.example.ts";

type RouteParams = {
  /**
   * This is a path for route url
   */
  path: any;
  /**
   * This is a label for the route as a name
   */
  linkLabel?: string;
  /**
   * This is the content that route renders
   */
  content: any;
  /**
   * If path needs to be authenticated. ie. true, false
   */
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
    path: "/signup",
    linkLabel: "Signup",
    content: register,
  },
  {
    path: "/example",
    linkLabel: "Example",
    content: create,
    isAuthenticated: true
  },
];

export default routes;

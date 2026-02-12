import { createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Browse from "./components/Browse";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      { path: "/",
        index: true,      // default route "/"
        element: <Login />
      },
      {
        path: "browse",   // "/browse"
        element: <Browse />
      }
    ]
  }
]);

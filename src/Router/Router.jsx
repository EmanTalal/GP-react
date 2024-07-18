import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "../index.css";
// import Home from "../pages/Home";
// import Login from "../compment/Login";
import Home from "../compment/Home";
import Login from "../Page/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/>,
    },
    {
        path: "/Login",
        element:<Login/>,
      },
  ]);
  
  ReactDOM.createRoot(document.getElementById("root")).render(
      <RouterProvider router={router} />
  );
  export default Rout;
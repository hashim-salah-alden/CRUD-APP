import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./rtk/store";
import RootLayout from "./pages/RootLayout";
import Index from "./pages/Index";
import AddPost from "./pages/AddPost";
import Details from "./pages/Details";
import Edit from "./pages/Edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "addpost",
        element: <AddPost />,
      },
      {
        path: ":id",
        element: <Details />,
      },
      {
        path: "edit/:id",
        element: <Edit />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

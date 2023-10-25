import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import WebDevelopment from "../pages/webDevelopment/WebDevelopment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/web-development",
        element: <WebDevelopment />,
      },
    ],
  },
]);

export default router;

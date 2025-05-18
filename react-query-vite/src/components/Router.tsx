import { createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import Admin from "./Admin/Admin";
import Layout from "./layout/Layout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> }, // default route
      { path: 'admin', element: <Admin /> },
    ],
  },
])

export default router;
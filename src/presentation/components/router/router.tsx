import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "@/presentation/pages";
import "@/presentation/styles/global.scss";

const AppRoutes: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;

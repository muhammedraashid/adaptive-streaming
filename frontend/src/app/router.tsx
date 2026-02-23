import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import RootLayout from "./layouts/RootLayout";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";



const VideoPage = lazy(() => import("@/features/video/pages/VideoPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <VideoPage />, 
      },
      {
        path: "video/:id",
        element: <VideoPage />,
      },
      {
        path: "upload",
        element: <div>Upload Page</div>,
      },
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <div>Login Page</div>,
      },
      {
        path: "register",
        element: <div>Register Page</div>,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <div>Dashboard Home</div>,
      },
    ],
  },
]);
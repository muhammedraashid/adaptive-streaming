import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import RootLayout from "./layouts/RootLayout";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import HomePage from "@/features/video/pages/HomePage";
import UploadPage from "@/features/video/pages/UploadPage";

const VideoPage = lazy(() => import("@/features/video/pages/VideoPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "video/:id",
        element: <VideoPage />,
      },
      {
        path: "upload",
        element: <UploadPage/>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <div>Login Page</div> },
      { path: "register", element: <div>Register Page</div> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <div>Dashboard Home</div> },
    ],
  },
]);
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { Suspense } from "react";
import { Spinner } from "@/components/ui/spinner";

export default function App() {
  return (
    <Suspense fallback={<div className="p-6"><Spinner/></div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
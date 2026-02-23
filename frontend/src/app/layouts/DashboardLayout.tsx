import Logo from "@/shared/components/Logo";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-slate-900 text-white">
      <aside className="w-64 border-r border-slate-700 p-4">
        <Logo/>
      </aside>

      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
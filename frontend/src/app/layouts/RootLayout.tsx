import Button from "@/shared/components/Button";
import Logo from "@/shared/components/Logo";
import { PlusIcon } from "lucide-react";
import { Outlet, useNavigate } from "react-router-dom";

const RootLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gray-950 text-white">
      <header className="flex items-center justify-between px-3 py-2">
        <Logo size={80} />

        <Button
          icon={<PlusIcon size={18} />}
          label="Create"
          className="bg-gray-800 hover:bg-slate-900 font-semibold rounded-full px-4 py-2"
          onClick={() => navigate("/upload")}
        />
      </header>

      <main className="p-6 w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
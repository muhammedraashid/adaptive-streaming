import Logo from "@/shared/components/Logo";
import { Outlet } from "react-router-dom";

 const RootLayout = () => {
  return (
    <div className="min-h-screen w-full bg-neutral-900 text-white">
      <header className="px-3 py-1 ">
        <Logo size={80}/>
      </header>

      <main className="p-6 w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
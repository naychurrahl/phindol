import { Outlet } from 'react-router';
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";

export function Root() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

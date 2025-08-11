import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/navigation/AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function AppLayout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset>
          <header className="sticky top-0 z-20 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
            <div className="container flex h-14 items-center gap-3">
              <SidebarTrigger className="ml-0" />
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-md bg-primary/90 shadow-[var(--shadow-elegant)]" aria-hidden />
                <span className="font-semibold">BlueFlow AI</span>
              </div>
            </div>
          </header>
          <main className="container py-6">
            <Outlet />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

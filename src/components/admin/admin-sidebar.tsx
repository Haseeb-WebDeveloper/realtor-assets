"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  FileImage,
  FolderKanban,
  Settings,
  CreditCard,
  BarChart,
  Bell,
  Upload,
} from "lucide-react";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin/dashboard",
  },
  {
    label: "Upload",
    icon: Upload,
    href: "/admin/upload",
  },
  {
    label: "Resources",
    icon: FileImage,
    href: "/admin/resources",
  },
  {
    label: "Users",
    icon: Users,
    href: "/admin/users",
  },
  {
    label: "Analytics",
    icon: BarChart,
    href: "/admin/analytics",
  },
  {
    label: "Subscriptions",
    icon: CreditCard,
    href: "/admin/subscriptions",
  },
  {
    label: "Notifications",
    icon: Bell,
    href: "/admin/notifications",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/admin/settings",
  },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 overflow-y-auto space-y-4 py-4 flex flex-col h-screen bg-background border-r">
      <div className="px-3 py-2">
        <Link href="/admin/dashboard" className="flex items-center pl-3 mb-8">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-primary/10 rounded-lg transition",
                pathname === route.href ? "bg-primary/10" : "transparent",
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3")} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 
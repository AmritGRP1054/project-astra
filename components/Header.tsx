"use client";

import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft, Home, PieChart, IndianRupee, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

interface HeaderProps {
  userInitials?: string;
}

export default function Header({ userInitials = "U" }: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();

  const NAV_ITEMS = [
    { href: "/home", icon: Home, label: "Home" },
    { href: "/analytics", icon: PieChart, label: "Analytics" },
    { href: "/earnings", icon: IndianRupee, label: "Earnings" },
    { href: "/tasking", icon: User, label: "Tasking" },
  ];

  // Extract the base route (e.g., `/tasking` from `/tasking/vaani`)
  const basePath = `/${pathname.split("/")[1]}`;

  // Check if the current route matches one of the base routes
  const isBaseRoute = NAV_ITEMS.some((item) => item.href === pathname);

  // Find the matching nav item for the base path
  const currentNavItem = NAV_ITEMS.find((item) => item.href === basePath);

  // Determine the title to display
  const pageTitle = isBaseRoute
    ? currentNavItem?.label || "Dashboard"
    : pathname.split("/").slice(-1)[0].replace(/-/g, " ").toUpperCase(); // Use the last part of the path for nested routes

  return (
    <header className='fixed top-0 left-0 z-50 w-full bg-white border-b shadow-sm'>
      <div className='container flex h-14 items-center px-4'>
        <div className='flex flex-1 items-center gap-4'>
          {/* Show Back Button for nested routes */}
          {!isBaseRoute ? (
            <Button
              variant='ghost'
              size='icon'
              onClick={() => router.back()}
              aria-label='Go back'>
              <ArrowLeft className='h-4 w-4' />
            </Button>
          ) : (
            // Show Logo for base routes
            currentNavItem?.icon && (
              <currentNavItem.icon className='h-5 w-5 text-gray-800' />
            )
          )}
          <h1 className='text-xl font-semibold text-gray-800'>{pageTitle}</h1>
        </div>
        {/* User Button (Clerk) */}
        <UserButton
          afterSignOutUrl='/'
          appearance={{
            elements: {
              avatarBox: "h-8 w-8 cursor-pointer",
            },
          }}
        />
      </div>
    </header>
  );
}

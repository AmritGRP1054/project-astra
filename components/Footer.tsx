"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, PieChart, IndianRupee, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function Footer() {
  const pathname = usePathname(); // Get the current path

  const navItems = [
    { href: "/home", icon: Home, label: "Home" },
    { href: "/analytics", icon: PieChart, label: "Analytics" },
    { href: "/earnings", icon: IndianRupee, label: "Earnings" },
    { href: "/tasking", icon: User, label: "Tasking" },
  ];

  return (
    <div>
      <nav className='fixed bottom-0 grid grid-cols-4 w-full p-2 bg-white border-t'>
        {navItems.map((item) => {
          // Match both exact and nested routes
          const isActive = pathname.startsWith(item.href);

          return (
            <Link key={item.href} href={item.href}>
              <Button
                variant='ghost'
                className='flex flex-col items-center gap-1 w-full h-full'>
                <item.icon
                  className={cn(
                    "h-6 w-6",
                    isActive ? "text-[#7b28cd]" : "text-gray-600"
                  )}
                />
                <span
                  className={cn(
                    "text-xs",
                    isActive ? "text-[#8000FF] font-medium" : "text-gray-600"
                  )}>
                  {item.label}
                </span>
              </Button>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default Footer;

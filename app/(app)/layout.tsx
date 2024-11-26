"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='relative min-h-screen flex flex-col'>
      {/* Header always fixed at the top */}
      <Header userInitials='U' />

      {/* Main content area */}
      <main className='flex-1'>{children}</main>

      {/* Footer always fixed at the bottom */}
      <Footer />
    </div>
  );
}

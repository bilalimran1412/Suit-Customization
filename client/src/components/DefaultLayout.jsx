"use client";
import React, { useState, ReactNode } from "react";

export default function DefaultLayout({ children}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <>
      <div className="flex">
        <div className="relative flex flex-1 flex-col lg:ml-72.5">
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

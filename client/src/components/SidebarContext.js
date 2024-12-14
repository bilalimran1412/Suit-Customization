import React, { createContext, useContext, useState } from 'react';

// Create Context
const SidebarContext = createContext();

// Provider Component
export const SidebarProvider = ({ children }) => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible((prev) => !prev);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarVisible, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Custom Hook
export const useSidebar = () => useContext(SidebarContext);

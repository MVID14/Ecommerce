import React, { useState, createContext } from 'react';

export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
   const [isOpen, setIsOpen] = useState(false);

   const handleCloseSideBar = () => {
      setIsOpen(false);
   };

   return (
      <SidebarContext.Provider value={{ isOpen, setIsOpen, handleCloseSideBar }}>{children}</SidebarContext.Provider>
   );
};

export default SidebarProvider;

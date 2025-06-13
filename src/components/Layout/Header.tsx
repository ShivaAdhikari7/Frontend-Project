import React from "react";
import { Menu } from "lucide-react";

interface HeaderProps {
  activeTab: string;
  setSidebarOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setSidebarOpen }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 flex-shrink-0">
      <div className="flex items-center justify-between h-16 px-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Open sidebar"
          >
            <Menu className="h-6 w-6" />
          </button>
          <div className="hidden lg:block">
            <h1 className="text-xl font-semibold text-gray-900 capitalize">
              {activeTab}
            </h1>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-500">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

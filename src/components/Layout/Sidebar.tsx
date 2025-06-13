import React from "react";
import { Home, Package } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface MenuItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  setSidebarOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  setSidebarOpen,
}) => {
  const menuItems: MenuItem[] = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: Home,
    },
    {
      id: "products",
      label: "Products",
      icon: Package,
    },
  ];

  const handleItemClick = (itemId: string) => {
    setActiveTab(itemId);
    setSidebarOpen(false);
  };

  return (
    <nav className="flex-1 space-y-2 p-4">
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => handleItemClick(item.id)}
          className={`
            w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors
            ${
              activeTab === item.id
                ? "bg-blue-100 text-blue-600 shadow-sm"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            }
          `}
          aria-current={activeTab === item.id ? "page" : undefined}
        >
          <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
          {item.label}
        </button>
      ))}
    </nav>
  );
};

export default Sidebar;

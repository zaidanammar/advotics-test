import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarContent,
  SidebarHeader,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import "../../styles/sidebar.css";
import { BsList } from "react-icons/bs";
import { ADashboard } from "../atoms/icons/ADashboard";

const MSidebar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const handleCollapseSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <aside className="z-0 h-full bg-slate-300">
      <ProSidebar collapsed={collapsed} breakPoint="md">
        <SidebarHeader>
          <div className="px-7 pb-3 pt-20 flex gap-3">
            <BsList
              onClick={handleCollapseSidebar}
              className="cursor-pointer"
              size={25}
            />
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem
              className="bg-secondary -mt-3 py-1 pl-0.5"
              icon={<ADashboard />}
            >
              Dashboard
            </MenuItem>
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </aside>
  );
};

export default MSidebar;

import React, { useContext } from "react";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarContent,
  SidebarHeader,
} from "react-pro-sidebar";
import { isMobile, isDesktop } from "react-device-detect";
import { BsList } from "react-icons/bs";

import { ADashboard } from "../atoms/icons/ADashboard";
import GlobalContext from "../../store/global/context";
import { ActionType } from "../../store/global/action";

import "../../styles/sidebar.css";
import "react-pro-sidebar/dist/css/styles.css";

const MSidebar = () => {
  const { GlobalState, GlobalDispatch } = useContext(GlobalContext);
  const { openSidebar } = GlobalState;

  const handleCollapseSidebar = () => {
    GlobalDispatch({
      type: ActionType.SetOpenSidebar,
      payload: !openSidebar,
    });
  };

  return (
    <aside
      className={
        "z-0 h-full bg-slate-300 " +
        (isDesktop ? "block" : openSidebar && isMobile ? "block" : "hidden")
      }
    >
      <ProSidebar
        collapsed={isMobile ? false : openSidebar}
        width={isMobile ? 700 : 250}
      >
        <SidebarHeader className="sm:flex hidden gap-3 px-7 pt-[68px] pb-1">
          <Menu iconShape="square">
            <BsList
              onClick={handleCollapseSidebar}
              className="cursor-pointer"
              size={25}
            />
          </Menu>
        </SidebarHeader>
        <SidebarContent className="block sm:pt-0 pt-20">
          <Menu iconShape="square">
            <MenuItem
              className="bg-secondary -mt-3 py-1 pl-0.5"
              icon={<ADashboard />}
              onClick={isMobile ? handleCollapseSidebar : () => {}}
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

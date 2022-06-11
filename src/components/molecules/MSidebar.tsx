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
        <SidebarHeader>
          <div className="px-7 pb-3 pt-20 sm:flex hiden gap-3">
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

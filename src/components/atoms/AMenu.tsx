import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, MenuItem } from "react-pro-sidebar";
import { isMobile } from "react-device-detect";
import { IconType } from "react-icons";
import { isEqual } from "lodash";

import { IIconProps } from "./icons/ADashboard";

type Props = {
  item: {
    title: string;
    path: string;
    icon: IconType | FC<IIconProps>;
    hideOnDesktop: boolean;
  };
  handleCollapseSidebar: () => void;
  handleLogout: () => void;
};

const AMenu = ({ item, handleCollapseSidebar, handleLogout }: Props) => {
  const { pathname } = useLocation();

  return (
    <Menu
      iconShape="square"
      key={item.path}
      className={"w-full " + (item.hideOnDesktop && "md:hidden")}
    >
      <MenuItem
        className={
          "-mt-3 py-1 pl-0.5 font-sans font-semibold " +
          (pathname.indexOf(item.path) !== -1
            ? "bg-secondary text-white"
            : "hover:text-secondary")
        }
        icon={<item.icon />}
        onClick={isMobile ? handleCollapseSidebar : () => {}}
      >
        <Link
          onClick={isEqual(item.path, "login") ? handleLogout : () => {}}
          to={item.path}
        />
        {item.title}
      </MenuItem>
    </Menu>
  );
};

export default AMenu;

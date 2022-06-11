import React, { useContext } from "react";
import { Avatar } from "@mui/material";
import { FiLogOut } from "react-icons/fi";
import { BsList } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";

import { advoticsLogo } from "../../assets/images";
import GlobalContext from "../../store/global/context";
import { ActionType } from "../../store/global/action";

const MNavbar = () => {
  const { GlobalDispatch, GlobalState } = useContext(GlobalContext);
  const { openSidebar } = GlobalState;

  const handleOpenSidebar = () => {
    GlobalDispatch({
      type: ActionType.SetOpenSidebar,
      payload: !openSidebar,
    });
  };

  return (
    <nav className="fixed h-16 z-10 flex md:px-8 px-6 w-full bg-white shadow-md">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2 justify-start">
          <div>
            <img
              src={advoticsLogo}
              className="w-28 cursor-pointer"
              alt="advotics-logo"
            />
          </div>
          <div className="md:flex hidden items-end gap-1 cursor-default mt-3">
            <p className="text-xs text-left text-textPrimary">Powered by</p>
            <img src={advoticsLogo} className="w-14" alt="advotics-logo" />
          </div>
        </div>

        <div className="flex flex-1 gap-4 items-center justify-end">
          <div className="md:flex hidden flex-col items-center justify-center text-textPrimary">
            <h1 className="text-sm">Username</h1>
            <p className="text-xs">Company Name</p>
          </div>
          <div className="md:flex hidden">
            <Avatar style={{ width: 32, height: 32 }} />
          </div>
          <div className="md:flex hidden">
            <FiLogOut size={20} color="#757575" className="cursor-pointer" />
          </div>
          <div onClick={handleOpenSidebar} className="md:hidden flex">
            {openSidebar ? (
              <MdOutlineCancel
                size={27}
                color="#757575"
                className="cursor-pointer"
              />
            ) : (
              <BsList size={25} color="#757575" className="cursor-pointer" />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MNavbar;

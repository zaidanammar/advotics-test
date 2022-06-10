import React, { ReactNode } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";

type Props = {
  children: ReactNode;
  title: string;
  otherProps?: any;
};

const OContainer = ({ children, title, otherProps }: Props) => {
  return (
    <div className={"bg-white rounded-sm shadow-md p-5 w-full " + otherProps}>
      <aside className="w-full flex justify-between">
        <h1 className="uppercase font-sans font-normal text-textPrimary md:text-lg">
          {title}
        </h1>
        <div className="flex gap-1 items-center">
          <h1>2022</h1>
          <BiDotsVerticalRounded className="cursor-pointer" />
        </div>
      </aside>
      {children}
    </div>
  );
};

export default OContainer;

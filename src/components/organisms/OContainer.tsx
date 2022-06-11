import React, { ReactNode } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";

type Props = {
  children: ReactNode;
  title: string;
  otherStyles?: string;
  filterComponent?: ReactNode;
};

const OContainer = ({
  children,
  title,
  otherStyles,
  filterComponent,
}: Props) => {
  return (
    <div className={"bg-white rounded-sm shadow-md p-5 w-full " + otherStyles}>
      <aside className="w-full flex justify-between items-center">
        <h1 className="uppercase font-sans font-normal text-textPrimary md:text-lg">
          {title}
        </h1>
        <div className="flex gap-1 items-center">
          {filterComponent}
          <BiDotsVerticalRounded className="cursor-pointer" size={22} />
        </div>
      </aside>
      {children}
    </div>
  );
};

export default OContainer;

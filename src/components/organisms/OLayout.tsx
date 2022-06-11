import React, { ReactNode } from "react";

import MNavbar from "../molecules/MNavbar";
import MSidebar from "../molecules/MSidebar";

type Props = {
  children: ReactNode;
};

const OLayout = ({ children }: Props) => {
  return (
    <main className="h-screen max-h-screen overflow-auto">
      <MNavbar />
      <section className="flex w-full h-full">
        <MSidebar />
        <div className="flex-1 h-screen overflow-y-scroll md:pt-24 pt-20 md:pb-10 pb-8 md:px-8 px-6">{children}</div>
      </section>
    </main>
  );
};

export default OLayout;

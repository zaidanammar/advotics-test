import React from "react";
import MMarketInsightBar from "../components/molecules/MMarketInsightBar";

const Dashboard = () => {
  return (
    <main>
      <aside>
        <h1 className="font-sans font-bold text-textSecondary md:text-3xl text-xl">
          Dashboard
        </h1>
      </aside>

      <aside className="md:mt-7 mt-4">
        <MMarketInsightBar />
      </aside>
    </main>
  );
};

export default Dashboard;

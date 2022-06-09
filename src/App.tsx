import React from "react";
import { Menu, MenuItem, ProSidebar, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { FaBeer } from "react-icons/fa";

function App() {
  return (
    <main>
      <ProSidebar collapsed={true}>
        <Menu iconShape="square">
          <MenuItem icon={<FaBeer />}>Dashboard</MenuItem>
          <SubMenu title="Components" icon={<FaBeer />}>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
    </main>
  );
}

export default App;

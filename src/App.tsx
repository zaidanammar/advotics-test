import React, { useReducer } from "react";
import {
  GlobalContextProvider,
  initialGlobalState,
} from "./store/global/context";
import { GlobalReducer } from "./store/global/reducer";
import OLayout from "./components/organisms/OLayout";
import Dashboard from "./pages/Dashboard";

function App() {
  const [GlobalState, GlobalDispatch] = useReducer(
    GlobalReducer,
    initialGlobalState
  );

  return (
    <GlobalContextProvider value={{ GlobalDispatch, GlobalState }}>
      <OLayout>
        <Dashboard />
      </OLayout>
    </GlobalContextProvider>
  );
}

export default App;

import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import StartPage from "./pages/StartPage";
import OrderPage from "./pages/OrderPage";
import { PageEnum } from "./enums";
import { useAppSelector } from "./hooks/redux";
import LastPage from "./pages/LastPage";

function App() {
  const currentPage = useAppSelector((state) => state.settings.currentPage);
  return (
    <div className="h-screen w-screen box-border">
      <Routes>
        <Route path={"/"} element={<StartPage />} />
        <Route path={"/order"} element={<OrderPage page={currentPage} />} />
        <Route path={"/last"} element={<LastPage />} />
      </Routes>
    </div>
  );
}

export default App;

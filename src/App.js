import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import "./App.css";

import NewTab from "./page/NewTab/NewTab";
import WhalekkuPage from "./page/WhalekkuPage/Whalekkupage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewTab />} />
          <Route path="/whalekkuPage" element={<WhalekkuPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

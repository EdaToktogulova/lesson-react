import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import Diologs from "./components/Diologs/Diologs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Pfofile";


const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/diologs" element={<Diologs />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

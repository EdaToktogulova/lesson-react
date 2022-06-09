import React from "react";
import "./App.css"
import Diologs from "./components/Diologs/Diologs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Pfofile";


const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
      <Diologs />
    </div>
  );
}

export default App;

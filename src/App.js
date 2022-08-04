import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Display";
import "./App.css";

function App() {
  return (
    // BEM
    <div className='flex max-h-screen max-w-screen-xl mx-auto pl-0 pr-2.5'>
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;


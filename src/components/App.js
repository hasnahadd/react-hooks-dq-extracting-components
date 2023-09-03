import React from "react";
import { messages, contacts } from "../data";
import MainContent from "./MainContent";
import SideMenu from "./SideMenu";


console.log("Messages:", messages);
console.log("Contacts:", contacts);

function App() {
  return (
    <div className="app">
      <SideMenu/>
      <MainContent/>
     
    </div>
  );
}

export default App;

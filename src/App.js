import logo from "./logo.svg";
import "./App.css";
import "./mainStyle.css";
import React from "react";
import ChatComp from "./Components/Chat/ChatComp";
import FooterNavComp from "./Components/FooterNavComp";
import Header from "./Components/Header";


function App() {
  document.body.style.backgroundColor = "#FF345B26";
  return (
    <>
      <Header/>
      <ChatComp />
      <FooterNavComp />
    </>
  );
}

export default App;

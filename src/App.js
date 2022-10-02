import React from "react";
import Arrived from "./components/Arrived";
import Browse from "./components/Browse";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Browse />
      <Arrived />
    </>
  );
}

export default App;

/** @format */

import React from "react";
import Home from "./pages/Home/Home";

function App() {
  const date = new Date();
  const hoy = date.toLocaleDateString();
  
  return <Home date={hoy}></Home>;
}

export default App;

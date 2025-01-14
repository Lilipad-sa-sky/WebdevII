//IMPORTS
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//IMPORT COMPONENTS
import Navbar from "./Components/Navbar/Navbar";
import Rome from "./Components/Rome/Rome";
import DL from "./Components/DL/DL";
import Emperors from "./Components/Emperors/Emperors";
import Mythos from "./Components/Mythos/Mythos";
import Signup from "./Components/Login/Signup";
import Login from "./Components/Login/Login";
import Archi from "./Components/Architecture/Archi";
import Militia from "./Components/Military/Militia";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop"; // Import ScrollToTop component

const App = () => {
  return (
    <>
    {/*ROUTING*/}
      <BrowserRouter>
        <ScrollToTop /> {/* Ensures scrolling to the top on route change */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Rome />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/daily-life" element={<DL />}></Route>
          <Route path="/emperors" element={<Emperors />}></Route>
          <Route path="/mythology" element={<Mythos />}></Route>
          <Route path="/architecture" element={<Archi />}></Route>
          <Route path="/military" element={<Militia />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
//GG GOOGNIGHT
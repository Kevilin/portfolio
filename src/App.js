import React from "react";
import { Center } from "@chakra-ui/layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./pages/Posts";
import Submit from "./pages/Submit";
import Footer from "./components/Footer";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/portfolio/" element={<Posts />} />
          <Route path="/portfolio/add" element={<Submit />} />
          <Route path="/portfolio/*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

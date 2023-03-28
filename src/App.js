import React from "react";
import { Center } from "@chakra-ui/layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./pages/Posts";
import Submit from "./pages/Submit";
import Footer from "./components/Footer";
import Error from "./pages/Error";
import Login from "./components/Login";
import { UserAuthContextProvider } from "./context/userAuthContext";

function App() {
  return (
    <>
      <UserAuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/portfolio/" element={<Posts />} />
            <Route path="/portfolio/adm" element={<Login />} />
            <Route path="/portfolio/add" element={<Submit />} />
            <Route path="/portfolio/*" element={<Error />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
